import { configureStore } from "@reduxjs/toolkit"
import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

import { LoginPage } from "../../../src/auth/pages/LoginPage"
import { authSlice  } from "../../../src/store/auth"
import {startGoogleSignIn} from "../../../src/store/auth/thunks"
import { notAuthenticatedState } from "../../fixtures/authFixteres"

const mockStartGoogleIn=jest.fn()
const mockStartLoginWithEmailPassword=jest.fn()

jest.mock("../../../src/store/auth/thunks",()=>({
    startGoogleSignIn:()=>mockStartGoogleIn,
    StartLoginWithEmailPassword:({email,password})=>{
        return ()=> mockStartLoginWithEmailPassword({email,password})
    }
}))

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}))

const store=configureStore({
    reducer:{
        auth:authSlice.reducer
    },
    preloadedState:{
        auth:notAuthenticatedState
    }
})

describe("test en <loginPage/>",()=>{

    beforeEach(()=>jest.clearAllMocks())
    test("debe de mpstrar el componente correctamente",()=>{
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1)
    })

    test('boton de google debe de llamar el startGoogleSingIn',()=>{
        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const googleBtn=screen.getBylabelText("google-btn")
        fireEvent.click(googleBtn)
        expect(mockStartGoogleIn).toHaveBeenCalled()
    })

    test("submit debe de llamar a StartloginWithEmailPassword",()=>{

        const email="nicogonzalezraggi@google.com"
        const password="123456"
        
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage/>
                </MemoryRouter>
            </Provider>
        )

        const emailField=screen.getByRol("textbox",{name:'Correo'})
        fireEvent.change(emailField,{target:{name:'email',value:email}})

        const passwordField=screen.getByTestId("password")
        fireEvent.change(passwordField,{target:{name:'password',value:password}})

        const loginForm=screen.getByLabelText("sumit-form")
        fireEvent.submit(loginForm)

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
            email: email,
            password: password
        })


    })
})
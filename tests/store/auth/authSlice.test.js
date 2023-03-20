import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixtures/authFixteres"


describe('pruebas en el authSlice',()=>{

    test('debe de llamar el estado inicial y llamarse "auth"',()=>{
        
        expect(authSlice.name).toBe('auth')
        const state=authSlice.reducer(initialState,{})

        expect(state).toEqual(initialState)
        
    })

    test('debe de hacer la autentificacion',()=>{
        
        const state = authSlice.reducer( initialState, login( demoUser ) );
        
        expect( state ).toEqual({
            status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURl: demoUser.photoURL,
            errorMessage: null
        })
    })

    test('debe de realizar el logout sin argumentos',()=>{
        
        const state = authSlice.reducer( authenticatedState, logout() );
        
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURl: null,
            errorMessage: undefined
        })

    })

    test('debe de realizar el logout y debe de mostrar un mensaje de error',()=>{

        const errorMessage="Credenciales no son correctas"
        const state = authSlice.reducer( authenticatedState, logout({errorMessage}));
    
        expect(state).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURl: null,
            errorMessage: errorMessage
        })
    
    })

    test("debe de cambiar el estado a checking",()=>{
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        expect( state.status ).toBe('checking');
    })

})


import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoute } from "../journal/routes/JournalRoute"


export const AppRouter=()=>{
    return(
        <Routes>

            {/*Login y registro*/}
            <Route path="/auth/*" element={<AuthRoutes/>}/>

            {/*Login y registro*/}
            <Route path="/*" element={<JournalRoute/>} />

        </Routes>
    )
}
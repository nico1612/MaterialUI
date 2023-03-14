import { Box } from "@mui/system"
import {NavBar, SideBar} from '../componets'

const drawerWidth=240;

export const JournalLayout=({children})=>{
    return(
        <Box sx={{display:'flex'}}     className='animate__animated animate__fadeIn animate__faster'>

            <NavBar drawerWidth={drawerWidth}/>

            <SideBar/>
            
            <Box
             component='main'
             sx={{flexGrow:1,p:3}}
            >

                {children}
            </Box>
        </Box>
    )
}
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    
    name: 'auth',
    
    initialState: {
        status: 'checking',//'checking', 'not-authenticated' , 'authenticated'
        uid:null,
        email:null,
        displayName:null,
        photoURl:null,
        errorMessage:null
    }, 

    reducers: {
        login:(state,{payload})=>{
            state.status='authenticated'
            state.uid=payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURl=payload.photoURl;
            state.errorMessage=null;
        },
        logout:(state,{payload})=>{
            state.status='not-authenticated';
            state.uid=null;
            state.email=null;
            state.displayName=null;
            state.photoURl=null;
            state.errorMessage=payload?.errorMessage;
        },
        checkingCredentials:(state)=>{
            state.status='checking'
        }
    }
});


export const { login,logout,checkingCredentials } = authSlice.actions;
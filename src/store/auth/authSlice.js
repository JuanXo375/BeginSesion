import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status:'not-athenticated',
        uid:null,
        email:null,
        displayName:null,
        photoUrl:null,
        errorMessage:null
    },
    reducers:{
        login:(state,{payload}) =>{
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoUrl = payload.photoUrl;
            state.errorMessage = null;

        },
        logout:(state,payload) =>{

        },
        chekingCredentials:(state)=>{
            state.status = 'checking';
        }
    }
});

export const {login,logout,chekingCredentials} = authSlice.actions;    
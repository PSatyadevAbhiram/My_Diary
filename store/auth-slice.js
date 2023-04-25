import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        password: '',
        email:'',
        isAuthenticated: false,
        loginMode: true,
    },
    reducers:{
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        toggleMode(state){
            state.loginMode = !state.loginMode;
        },
        toggleAuthentication(state){
            state.isAuthenticated = !state.isAuthenticated;
        }
    },
});

export default authSlice;
export const authActions = authSlice.actions;
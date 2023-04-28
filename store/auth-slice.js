import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        password: '',
        email:'',
        isAuthenticated: 'false',
        mode: 'login',
    },
    reducers:{
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        toggleMode(state, action){
            state.mode = action.payload;
        },
        toggleAuthentication(state, action){
            state.isAuthenticated = action.payload;
        }
    },
});

export default authSlice;
export const authActions = authSlice.actions;
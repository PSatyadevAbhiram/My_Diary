import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import diarySlice from "./diary-slice";

const store = configureStore({
    reducer: {auth: authSlice.reducer, diary: diarySlice.reducer},
});

export default store;
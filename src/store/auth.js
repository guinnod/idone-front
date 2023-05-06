import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = axios.get()
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {

    }
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
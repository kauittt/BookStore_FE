import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticateSuccess(state, action) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.error = null;
        },
        authenticateFailed(state, action) {
            state.error = action.payload.error;
        },
        logout(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.error = null;
        },
    },
});

export const { authenticateSuccess, authenticateFailed, logout } =
    authSlice.actions;

export const selectAuthState = (state) => state.auth;
export default authSlice.reducer;

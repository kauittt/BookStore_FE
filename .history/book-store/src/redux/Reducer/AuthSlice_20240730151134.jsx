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
        authenticate(state, action) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.error = null;
        },
        logout(state) {
            state.accessToken = null;
            state.refreshToken = null;
        },
        authenticationFailed(state, action) {
            state.error = action.payload.error;
        },
    },
});

export const { authenticate, logout, authenticationFailed } = authSlice.actions;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
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
    userSlice.actions;

export const selectAuthState = (state) => state.auth;
export default userSlice.reducer;

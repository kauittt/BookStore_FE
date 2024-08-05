import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserSuccess(state, action) {
            state.user = action.payload;
            state.error = null;
        },
        authenticateFailed(state, action) {
            state.error = action.payload.error;
        },
        logout(state) {
            state.user = null;
            state.error = null;
        },
    },
});

export const { authenticateSuccess, authenticateFailed, logout } =
    userSlice.actions;

export const selectAuthState = (state) => state.auth;
export default userSlice.reducer;

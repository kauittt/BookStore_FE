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
        getUserFailed(state, action) {
            state.error = action.payload.error;
        },
        logout(state) {
            state.user = null;
            state.error = null;
        },
    },
});

export const { getUserSuccess, getUserFailed, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;

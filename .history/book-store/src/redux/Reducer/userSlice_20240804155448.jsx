import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
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
        userLogout(state) {
            state.user = null;
            state.error = null;
        },
    },
});

export const { getUserSuccess, getUserFailed, userLogout } = userSlice.actions;

export const selectUser = (state) => state.user;
export default userSlice.reducer;

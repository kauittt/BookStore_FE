import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {},
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartSuccess(state, action) {
            state.cart = action.payload;
            state.error = null;
        },
        getCartFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const { getCartSuccess, getCartFailed } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;

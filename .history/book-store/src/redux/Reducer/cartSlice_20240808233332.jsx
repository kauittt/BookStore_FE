import { createSlice } from "@reduxjs/toolkit";
import { cleanCart } from "../Action/cartAction";

const initialState = {
    cart: null,
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
        setCartError(state, action) {
            state.error = action.payload;
        },
        cleanCartSuccess(state, action) {
            state.cart = null;
            state.error = null;
        },
        cleanCartFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const {
    getCartSuccess,
    getCartFailed,
    setCartError,
    cleanCartSuccess,
    cleanCartFailed,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;

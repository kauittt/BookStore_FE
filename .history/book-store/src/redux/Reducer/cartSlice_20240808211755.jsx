import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: null,
    error: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartSuccess(state, action) {
            console.log("set cart");
            state.cart = action.payload;
            state.error = null;
            console.log(state.cart);
        },
        getCartFailed(state, action) {
            state.error = action.payload;
        },
        setCartError(state, action) {
            state.error = action.payload;
        },
    },
});

export const { getCartSuccess, getCartFailed, setCartError } =
    cartSlice.actions;

export const selectCart = (state) => state.cart.cart;
export const selectCartError = (state) => state.cart.error;

export default cartSlice.reducer;

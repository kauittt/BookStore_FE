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
            state.books = action.payload;
            state.error = null;
        },
        getCartFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const {} = cartSlice.actions;

export const selectBook = (state) => state.book.books;
export const selectViewAll = (state) => state.book.viewAll;
export const selectSelectedBook = (state) => state.book.selected;

export default cartSlice.reducer;

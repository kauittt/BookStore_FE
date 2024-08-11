import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: null,
    error: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getBookGroupedSuccess(state, action) {
            state.books = action.payload;
            state.error = null;
        },
        getBookGroupedFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const {} = orderSlice.actions;

export const selectBook = (state) => state.book.books;
export const selectViewAll = (state) => state.book.viewAll;
export const selectSelectedBook = (state) => state.book.selected;
export default orderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: null,
    viewAll: null,
    error: null,
};

const bookSlice = createSlice({
    name: "book",
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

export const { getBookGroupedSuccess, getBookGroupedFailed } =
    bookSlice.actions;

export const selectBook = (state) => state.book.books;
export const selectViewAll = (state) => state.book.viewAll;
export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalBooks: null,
    books: null,
    viewAll: null,
    selected: null,
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
        getTotalBookGroupedSuccess(state, action) {
            state.totalBooks = action.payload;
            state.error = null;
        },
        getTotalBookGroupedFailed(state, action) {
            state.error = action.payload;
        },
        setViewAllBooks(state, action) {
            state.viewAll = action.payload;
        },
        setSelectedBook(state, action) {
            state.selected = action.payload;
        },
    },
});

export const {
    getBookGroupedSuccess,
    getBookGroupedFailed,
    setViewAllBooks,
    setSelectedBook,
    getTotalBookGroupedSuccess,
    getTotalBookGroupedFailed,
} = bookSlice.actions;

export const selectBook = (state) => state.book.books;
export const selectTotalBook = (state) => state.book.totalBooks;
export const selectViewAll = (state) => state.book.viewAll;
export const selectSelectedBook = (state) => state.book.selected;
export default bookSlice.reducer;

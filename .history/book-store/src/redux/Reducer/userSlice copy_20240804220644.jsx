import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: null,
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

export const {} = bookSlice.actions;

export const selectBook = (state) => state.book.books;
export default bookSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/userSlice";
import bookSlice from "../Reducer/bookSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        book: bookSlice,
    },
});

export default store;

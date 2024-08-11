import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/userSlice";
import bookSlice from "../Reducer/bookSlice";
import cartSlice from "../Reducer/cartSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        book: bookSlice,
        cart: cartSlice,
    },
});

export default store;

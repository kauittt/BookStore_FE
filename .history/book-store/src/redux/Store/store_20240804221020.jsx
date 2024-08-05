import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Reducer/userSlice";
import bookSlice from "../Reducer/bookSlice";

const store = configureStore({
    reducer: {
        // Đặt các reducer khác ở đây nếu cần
        user: userSlice,
        book: bookSlice,
    },
    // Thêm middleware khác nếu cần

    // Thêm middleware khác nếu cần
});

export default store;

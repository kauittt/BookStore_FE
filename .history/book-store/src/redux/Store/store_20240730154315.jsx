import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./../Reducer/authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // Đặt các reducer khác ở đây nếu cần
    },
    // Thêm middleware khác nếu cần

    // Thêm middleware khác nếu cần
});

export default store;

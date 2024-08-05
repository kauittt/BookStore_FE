import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Reducer/AuthSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        // Đặt các reducer khác ở đây nếu cần
    },
    // Thêm middleware khác nếu cần

    // Thêm middleware khác nếu cần
});

export default store;

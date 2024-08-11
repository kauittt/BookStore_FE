import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: null,
    error: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getOrdersSuccess(state, action) {
            state.books = action.payload;
            state.error = null;
        },
        getOrdersFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const { getOrdersSuccess, getOrdersFailed } = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectOrdersError = (state) => state.order.error;
export default orderSlice.reducer;

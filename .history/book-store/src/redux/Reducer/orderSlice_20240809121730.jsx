import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
    totalOrders: [],
    error: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getOrdersSuccess(state, action) {
            state.orders = action.payload;
            state.error = null;
        },
        getOrderFailed(state, action) {
            state.error = action.payload;
        },
        addOrderSuccess(state, action) {
            state.orders.push(action.payload);
            state.error = null;
        },
        addOrderFailed(state, action) {
            state.error = action.payload;
        },
        getTotalOrdersSuccess(state, action) {
            state.totalOrders = action.payload;
            state.error = null;
        },
        getTotalOrderFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const {
    getOrdersSuccess,
    getOrderFailed,
    addOrderSuccess,
    addOrderFailed,
    getTotalOrdersSuccess,
    getTotalOrderFailed,
} = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectOrdersError = (state) => state.order.error;
export default orderSlice.reducer;

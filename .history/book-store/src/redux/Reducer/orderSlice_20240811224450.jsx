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
        getOrdersFailed(state, action) {
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
        getTotalOrdersFailed(state, action) {
            state.error = action.payload;
        },
    },
});

export const {
    getOrdersSuccess,
    getOrdersFailed,
    addOrderSuccess,
    addOrderFailed,
    getTotalOrdersSuccess,
    getTotalOrdersFailed,
} = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectTotalOrders = (state) => state.order.totalOrders;
export const selectOrdersError = (state) => state.order.error;
export default orderSlice.reducer;

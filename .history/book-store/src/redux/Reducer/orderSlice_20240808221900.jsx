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
            state.orders = action.payload;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        addOrderSuccess(state, action) {
            state.orders.push(action.payload);
            state.error = null;
        },
    },
});

export const { getOrdersSuccess, addOrderSuccess, setError } =
    orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectOrdersError = (state) => state.order.error;
export default orderSlice.reducer;

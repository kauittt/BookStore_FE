import OrderService from "../../services/OrderService";
import {
    addOrderFailed,
    addOrderSuccess,
    getOrdersFailed,
    getOrdersSuccess,
    getTotalOrdersFailed,
    getTotalOrdersSuccess,
} from "../Reducer/orderSlice";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

export const getOrders = (paraToken) => {
    const token = paraToken || accessToken;
    return async (dispatch) => {
        try {
            const response = await OrderService.fetchOrders(token);
            dispatch(getTotalOrdersSuccess(response.data));
        } catch (error) {
            dispatch(getTotalOrdersFailed(error.message));
        }
    };
};

export const getOrdersByUserId = (userId) => {
    return async (dispatch) => {
        try {
            const response = await OrderService.fetchOrdersByUserId(userId);
            dispatch(getOrdersSuccess(response.data));
        } catch (error) {
            dispatch(getOrdersFailed(error.message));
        }
    };
};

export const getOrdersByUsername = (username, accessToken) => {
    return async (dispatch) => {
        try {
            const response = await OrderService.fetchOrdersByUsername(
                username,
                accessToken
            );
            dispatch(getOrdersSuccess(response.data));
        } catch (error) {
            dispatch(getOrdersFailed(error.message));
        }
    };
};

export const addOrder = (body) => {
    return async (dispatch) => {
        try {
            const response = await OrderService.postAddOrder(body);
            dispatch(addOrderSuccess(response.data));
            return { success: true, data: response.data };
        } catch (error) {
            dispatch(addOrderFailed(error.message));
            return { success: false, error: error.message };
        }
    };
};

export const updateOrder = (body) => {
    return async (dispatch) => {
        try {
            await OrderService.putUpdateOrder(body);

            await dispatch(getOrders());
        } catch (error) {
            dispatch(getOrdersFailed(error.message));
        }
    };
};

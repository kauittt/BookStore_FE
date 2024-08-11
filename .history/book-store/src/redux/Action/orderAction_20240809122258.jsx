import OrderService from "../../services/OrderService";
import {
    addOrderFailed,
    addOrderSuccess,
    getOrderFailed,
    getOrdersSuccess,
    getTotalOrdersFailed,
    getTotalOrdersSuccess,
} from "../Reducer/orderSlice";

export const getOrders = (accessToken) => {
    return async (dispatch) => {
        try {
            const response = await OrderService.fetchOrders(accessToken);
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
            dispatch(getOrderFailed(error.message));
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
            dispatch(getOrderFailed(error.message));
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

// export const updateUser = (user) => {
//     return (dispatch) => {
//         UserService.updateUser(user)
//             .then((response) => {
//                 const userData = response.data;
//                 localStorage.setItem("user", JSON.stringify(userData));
//                 dispatch(updateUserSuccess(userData));
//             })
//             .catch((error) => {
//                 dispatch(updateUserFailed(error.message));
//             });
//     };
// };

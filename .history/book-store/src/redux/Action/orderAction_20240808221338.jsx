import OrderService from "../../services/OrderService";
import { getOrdersFailed, getOrdersSuccess } from "../Reducer/orderSlice";

// export const getOrders = (userId) => {
//     return (dispatch) => {
//         OrderService.fetchOrder(userId)
//             .then((response) => {
//                 dispatch(getBookGroupedSuccess(response.data));
//             })
//             .catch((error) => {
//                 dispatch(getBookGroupedFailed(error.message));
//             });
//     };
// };

export const getOrders = (userId) => {
    return async (dispatch) => {
        try {
            const response = await OrderService.fetchOrder(userId);
            dispatch(getOrdersSuccess(response.data));
        } catch (error) {
            dispatch(getOrdersFailed(error.message));
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

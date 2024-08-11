import { getCartFailed, getCartSuccess } from "../Reducer/cartSlice";
import CartService from "./../../services/CartService";

export const getCartInfoById = (userId) => {
    return async (dispatch) => {
        try {
            const response = await CartService.fetchCartInfoById(userId);
            console.log(response);
            dispatch(getCartSuccess(response.data));
        } catch (error) {
            dispatch(getCartFailed(error.message));
        }
    };
};
export const getCartInfoByUsername = (username, accessToken) => {
    return async (dispatch) => {
        try {
            const response = await CartService.fetchCartInfoByUsername(
                username,
                accessToken
            );
            dispatch(getCartSuccess(response.data));
        } catch (error) {
            dispatch(getCartFailed(error.message));
        }
    };
};

export const updateCart = (userId, bookId, quantity) => {
    const body = {
        bookIds: [bookId],
        quantities: [quantity],
    };
    return async (dispatch) => {
        try {
            const response = await CartService.putUpdateCart(userId, body);
            dispatch(getCartSuccess(response.data));
            return { success: true, data: response.data };
        } catch (error) {
            dispatch(getCartFailed(error.message));
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

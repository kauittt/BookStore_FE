import { getCartFailed, getCartSuccess } from "../Reducer/cartSlice";
import CartService from "./../../services/CartService";

export const getCartInfoById = (userId) => {
    return (dispatch) => {
        CartService.fetchCartInfoById(userId)
            .then((response) => {
                dispatch(getCartSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getCartFailed(error.message));
            });
    };
};

export const getCartInfoByUsername = (username, accessToken) => {
    return (dispatch) => {
        CartService.fetchCartInfoByUsername(username, accessToken)
            .then((response) => {
                dispatch(getCartSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getCartFailed(error.message));
            });
    };
};

export const updateCart = (userId, bookId, quantity) => {
    const body = {
        bookIds: [bookId],
        quantities: [quantity],
    };
    return (dispatch) => {
        CartService.putUpdateCart(userId, body)
            .then((response) => {
                dispatch(getCartSuccess(response.data));
                return response.data;
            })
            .catch((error) => {
                dispatch(getCartFailed(error.message));
                throw error;
            });
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

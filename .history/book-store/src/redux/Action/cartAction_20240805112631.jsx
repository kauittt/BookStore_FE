import { getCartFailed, getCartSuccess } from "../Reducer/cartSlice";
import CartService from "./../../services/CartService";

export const getCartInfo = (userId) => {
    return (dispatch) => {
        CartService.fetchCartInfo(userId)
            .then((response) => {
                console.log("CART");
                console.log(response.data);
                dispatch(getCartSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getCartFailed(error.message));
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

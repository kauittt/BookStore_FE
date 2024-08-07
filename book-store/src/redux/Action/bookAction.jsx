import BookService from "../../services/BookService";
import {
    getBookGroupedFailed,
    getBookGroupedSuccess,
} from "../Reducer/bookSlice";

export const getBookGrouped = (accessToken) => {
    return (dispatch) => {
        BookService.fetchBookGrouped(accessToken)
            .then((response) => {
                dispatch(getBookGroupedSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getBookGroupedFailed(error.message));
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

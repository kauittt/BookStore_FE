import BookService from "../../services/BookService";
import {
    getBookGroupedFailed,
    getBookGroupedSuccess,
} from "../Reducer/bookSlice";

export const getBookGrouped = (accessToken) => {
    return (dispatch) => {
        BookService.fetchBookGrouped(accessToken)
            .then((response) => {
                console.log("Fetch Book ok");
                dispatch(getBookGroupedSuccess(response.data));
            })
            .catch((error) => {
                console.log("Fetch Book error");
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

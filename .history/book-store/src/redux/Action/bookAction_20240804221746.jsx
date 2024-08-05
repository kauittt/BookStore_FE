import BookService from "../../services/BookService";
import {
    getBookGroupedFailed,
    getBookGroupedSuccess,
} from "../Reducer/bookSlice";

export const getBookGrouped = () => {
    return (dispatch) => {
        BookService.getBookGrouped()
            .then((response) => {
                const books = response.data;
                console.log(books);
                console.log(books[0]);
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

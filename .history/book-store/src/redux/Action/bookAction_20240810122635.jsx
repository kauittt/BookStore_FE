import { useSelector } from "react-redux";
import BookService from "../../services/BookService";
import {
    getBookGroupedFailed,
    getBookGroupedSuccess,
    getTotalBookFailed,
    getTotalBookSuccess,
    selectBook,
} from "../Reducer/bookSlice";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

export const getBookGrouped = (accessToken) => {
    return async (dispatch) => {
        try {
            const response = await BookService.fetchBookGrouped(accessToken);
            dispatch(getBookGroupedSuccess(response.data));
        } catch (error) {
            dispatch(getBookGroupedFailed(error.message));
        }
    };
};

export const getBook = (accessToken) => {
    return async (dispatch) => {
        try {
            const response = await BookService.fetchBook(accessToken);

            // Optimistically update the state
            let currentBooks = useSelector(selectBook).book.totalBooks || [];
            const updatedBooks = currentBooks.map((book) =>
                book.id === response.data.id ? response.data : book
            );

            // dispatch(getTotalBookSuccess(updatedBooks));
            // dispatch(getTotalBookSuccess(response.data));
        } catch (error) {
            dispatch(getTotalBookFailed(error.message));
        }
    };
};

export const updateBook = (id, body) => {
    console.log("updateBook");
    return async (dispatch) => {
        try {
            const response = await BookService.putUpdateBook(id, body);
            console.log("Action");
            console.log(response);
            // dispatch(setBookNull());
            getBook(accessToken);
            getBookGrouped(accessToken);
        } catch (error) {
            dispatch(getTotalBookFailed(error.message));
        }
    };
};

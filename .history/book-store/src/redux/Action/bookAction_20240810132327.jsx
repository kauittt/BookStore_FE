import { useSelector } from "react-redux";
import BookService from "../../services/BookService";
import {
    getBookGroupedFailed,
    getBookGroupedSuccess,
    getTotalBookFailed,
    getTotalBookSuccess,
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
            dispatch(getTotalBookSuccess(response.data));
        } catch (error) {
            dispatch(getTotalBookFailed(error.message));
        }
    };
};

export const updateBook = (id, body) => {
    console.log("updateBook");
    return async (dispatch) => {
        try {
            await BookService.putUpdateBook(id, body);

            await dispatch(getBook(accessToken));
            await dispatch(getBookGrouped(accessToken));
        } catch (error) {
            dispatch(getTotalBookFailed(error.message));
        }
    };
};

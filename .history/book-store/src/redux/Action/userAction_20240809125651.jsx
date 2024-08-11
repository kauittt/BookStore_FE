import UserService from "../../services/UserService";
import {
    getUserFailed,
    getUserSuccess,
    updateUserFailed,
    updateUserSuccess,
} from "../Reducer/userSlice";
export const getTotalUsers = (accessToken) => {
    return async (dispatch) => {
        try {
            const response = await UserService.fetchUserByUsername(
                username,
                accessToken
            );
            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            dispatch(getUserSuccess(userData));
        } catch (error) {
            dispatch(getUserFailed(error.message));
        }
    };
};

export const getUserInfo = (username, accessToken) => {
    return async (dispatch) => {
        try {
            const response = await UserService.fetchUserByUsername(
                username,
                accessToken
            );
            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            dispatch(getUserSuccess(userData));
        } catch (error) {
            dispatch(getUserFailed(error.message));
        }
    };
};

export const updateUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await UserService.updateUser(user);
            const userData = response.data;
            localStorage.setItem("user", JSON.stringify(userData));
            dispatch(updateUserSuccess(userData));
        } catch (error) {
            dispatch(updateUserFailed(error.message));
        }
    };
};

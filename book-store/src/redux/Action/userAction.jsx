import UserService from "../../services/UserService";
import {
    deleteUserFailed,
    getTotalUsersFailed,
    getTotalUsersSuccess,
    getUserFailed,
    getUserSuccess,
    updateUserFailed,
} from "../Reducer/userSlice";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

export const getTotalUsers = (paraToken) => {
    const token = paraToken || accessToken;
    return async (dispatch) => {
        try {
            const response = await UserService.fetchUsers(token);
            dispatch(getTotalUsersSuccess(response.data));
        } catch (error) {
            dispatch(getTotalUsersFailed(error.message));
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
            await UserService.updateUser(user);
            dispatch(getTotalUsers());
        } catch (error) {
            dispatch(updateUserFailed(error.message));
        }
    };
};

export const removeUser = (id) => {
    return async (dispatch) => {
        try {
            await UserService.deleteRemoveUser(id);
            dispatch(getTotalUsers());
        } catch (error) {
            dispatch(deleteUserFailed(error.message));
        }
    };
};

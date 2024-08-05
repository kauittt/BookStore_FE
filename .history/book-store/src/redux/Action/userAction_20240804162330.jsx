import UserService from "../../services/UserService";
import { getUserFailed, getUserSuccess } from "../Reducer/userSlice";

export const getUserInfo = (username, accessToken) => {
    return (dispatch) => {
        UserService.getUserByUsername(username, accessToken)
            .then((response) => {
                const userData = response.data;
                localStorage.setItem("user", JSON.stringify(userData));
                dispatch(getUserSuccess(userData));
            })
            .catch((error) => {
                dispatch(getUserFailed(error.message));
            });
    };
};

export const updateUser = (user) => {
    return (dispatch) => {
        UserService.updateUser(user)
            .then((response) => {
                const userData = response.data;
                localStorage.setItem("user", JSON.stringify(userData));
                dispatch(getUserSuccess(userData));
            })
            .catch((error) => {
                dispatch(getUserFailed(error.message));
            });
    };
};

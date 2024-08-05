import UserService from "../../services/UserService";
import { getUserFailed, getUserSuccess } from "../Reducer/userSlice";

export const getUserInfo = (username) => {
    return (dispatch) => {
        UserService.getUserByUsername(username)
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

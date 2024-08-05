import UserService from "../../services/UserService";
import { getUserFailed, getUserSuccess } from "../Reducer/userSlice";

export const getUserInfo = (username) => {
    return (dispatch) => {
        UserService.getUserByUsername(username)
            .then((response) => {
                dispatch(getUserSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUserFailed(error.message));
            });
    };
};

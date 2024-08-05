import UserService from "../../services/UserService";
import { getUserFailed, getUserSuccess } from "../Reducer/userSlice";

export const getUserInfo = () => {
    return (dispatch) => {
        UserService.getUserByUsername()
            .then((response) => {
                dispatch(getUserSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUserFailed(error.message));
            });
    };
};

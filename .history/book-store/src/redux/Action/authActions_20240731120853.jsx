import LoginService from "../../services/LoginService";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = (userData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userData,
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};

export const loginUser = (credentials) => {
    return (dispatch) => {
        LoginService.Login(credentials)
            .then((response) => {
                dispatch(loginSuccess(response.data));
            })
            .catch((error) => {
                dispatch(loginFailure(error.message));
            });
    };
};

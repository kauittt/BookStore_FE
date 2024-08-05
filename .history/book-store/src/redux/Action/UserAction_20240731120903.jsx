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

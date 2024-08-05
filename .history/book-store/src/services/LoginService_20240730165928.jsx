import axios from "axios";

const LoginService = {
    // Login: (body) =>
    //     axios
    //         .create({
    //             baseURL: "http://localhost:8080/",
    //             timeout: 5000,
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Headers":
    //                     "Origin, X-Requested-With, Content-Type, Accept",
    //                 "Access-Control-Allow-Origin": "https://localhost:5173",
    //                 "Access-Control-Allow-Methods":
    //                     "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //                 Accept: "application/x-www-form-urlencoded, text/plain",
    //             },
    //         })
    //         .post("users/login", body),
    Login: (body) =>
        axios({
            method: "post",
            url: "http://localhost:8080/users/login",
            data: body,
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }),
};

export default LoginService;

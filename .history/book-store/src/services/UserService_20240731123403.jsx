import axios from "axios";

let accessToken = localStorage.getItem("accessToken");
let username = localStorage.getItem("username");

const UserService = {
    getUserByUsername: () => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers":
                        "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Origin": "https://localhost:5173",
                    "Access-Control-Allow-Methods":
                        "GET, PUT, POST, DELETE, PATCH, OPTIONS",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                    Accept: "application/json",
                },
            })
            .get(`users/username/${username}`);
    },
};

export default UserService;

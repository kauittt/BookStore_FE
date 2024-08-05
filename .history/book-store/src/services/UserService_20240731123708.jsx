import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));
let username = JSON.parse(localStorage.getItem("username"));
console.log(accessToken);
console.log(username);

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

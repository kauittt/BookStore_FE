import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

const UserService = {
    getUserByUsername: (username, accessToken) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`users/username/${username}`);
    },
    updateUser: (user) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .put(`users/${user.id}`, user);
    },
};

export default UserService;

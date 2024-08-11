import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

const CartService = {
    fetchCartInfoById: (userId) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`carts/${userId}`);
    },
    fetchCartInfoByUsername: (username, accessToken) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`carts/username/${username}`);
    },
    putUpdateCart: (userId, body) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .put(`carts/update/${userId}`, body);
    },
    putCleanCart: (userId) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .put(`carts/clean/${userId}`);
    },
};

export default CartService;

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
    fetchCartInfoByUsername: (username) => {
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
};

export default CartService;

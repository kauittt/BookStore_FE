import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

const OrderService = {
    fetchOrders: () => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`orders`);
    },
    fetchOrdersByUserId: (userId) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`orders/userId/${userId}`);
    },
    fetchOrdersByUsername: (username, accessToken) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`orders/username/${username}`);
    },
    postAddOrder: (body) => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .post(`orders`, body);
    },
};

export default OrderService;

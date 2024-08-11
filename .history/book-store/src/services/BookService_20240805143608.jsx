import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));
console.log(accessToken);

const BookService = {
    fetchBookGrouped: () => {
        return axios
            .create({
                baseURL: "http://localhost:8080/",
                timeout: 5000,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Pass token here!!
                },
            })
            .get(`books/grouped`);
    },
};

export default BookService;
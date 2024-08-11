import axios from "axios";

let accessToken = JSON.parse(localStorage.getItem("accessToken"));

const BookService = {
    fetchBookGrouped: () => {
        console.log("BookService");
        console.log(JSON.parse(localStorage.getItem("accessToken")));

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

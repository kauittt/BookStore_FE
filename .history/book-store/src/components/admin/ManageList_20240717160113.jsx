import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";
const ManageList = () => {
    const fields = [
        {
            group: "Order Management",
            fields: [
                { name: "Serial Number" },
                { name: "Customer Name" },
                { name: "Product Name" },
                { name: "Quantity" },
                { name: "Price" },
                { name: "Address" },
                { name: "Phone Number" },
            ],
        },
        {
            group: "Book Management",
            fields: [
                { name: "Serial Number" },
                { name: "Image" },
                { name: "Book Title" },
                { name: "Category" },
                { name: "Stock" },
                { name: "Price" },
                { name: "Description" },
            ],
        },
        {
            group: "User Management",
            fields: [
                { name: "Serial Number" },
                { name: "Role" },
                { name: "Username" },
                { name: "Name" },
                { name: "Email" },
                { name: "Address" },
                { name: "Phone Number" },
            ],
        },
    ];

    return <div></div>;
};
ManageList.propTypes = {
    book: PropTypes.object,
};
export default ManageList;

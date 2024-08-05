import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";
import ManageItem from "./ManageItem";
const ManageList = (props) => {
    const category = [
        {
            group: "Order",
            fields: [
                { name: "Serial", width: "50px" },
                { name: "Customer Name", width: "150px" },
                { name: "Product Name", width: "100px" },
                { name: "Quantity", width: "75px" },
                { name: "Price", width: "75px" },
                { name: "Phone Number", width: "100px" },
                { name: "Address", width: "flex-1" }, // This will take the remaining space
            ],
        },
        {
            group: "Book",
            fields: [
                { name: "Serial", width: "50px" },
                { name: "Image", width: "60px" },
                { name: "Category", width: "100px" },
                { name: "Book Title", width: "200px" },
                { name: "Stock", width: "50px" },
                { name: "Price", width: "100px" },
                { name: "Description", width: "flex-1" },
            ],
        },
        {
            group: "User",
            fields: [
                { name: "Serial", width: "50px" },
                { name: "Username", width: "150px" },
                { name: "Role", width: "100px" },
                { name: "Name", width: "150px" },
                { name: "Email", width: "100px" },
                { name: "Phone Number", width: "150" },
                { name: "Address", width: "flex-1" },
            ],
        },
    ];

    return (
        <div>
            {/*//* Category */}
            <div
                className="flex justify-between items-center
            font-semibold text-lg"
            >
                {category[1].fields.map((field, index) => (
                    <p key={index}>{field.name}</p>
                ))}
            </div>

            {/*//* List Item */}
            <div className="flex flex-col gap-[10px]">
                {props.books.map((book, index) => (
                    <ManageItem
                        data={book}
                        key={index}
                        index={index}
                    ></ManageItem>
                ))}
            </div>
        </div>
    );
};
ManageList.propTypes = {
    books: PropTypes.array,
};
export default ManageList;

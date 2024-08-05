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
                { name: "Book Title", width: "150px" },
                { name: "Quantity", width: "100px" },
                { name: "Price", width: "100px" },
                { name: "Phone Number", width: "100px" },
                { name: "Address", flex: "1" }, // Use flex for flexible widths
            ],
        },
        {
            group: "Book",
            fields: [
                { name: "Serial", style: "w-[60px]" },
                { name: "Image", style: "w-[100px]" },
                { name: "Book Title", style: "w-[250px]" },
                { name: "Category", style: "w-[100px]" },
                { name: "Stock", style: "w-[100px]" },
                { name: "Price", style: "w-[100px]" },
                { name: "Description", style: "flex-1" },
            ],
        },
        {
            group: "User",
            fields: [
                { name: "Serial", width: "50px" },
                { name: "Username", width: "150px" },
                { name: "Name", width: "200px" },
                { name: "Role", width: "100px" },
                { name: "Email", width: "200px" },
                { name: "Phone Number", width: "150px" },
                { name: "Address", flex: "1" },
            ],
        },
    ];

    return (
        <div>
            {/*//* Category */}
            <div
                className="flex justify-between items-center gap-[10px]
            font-semibold text-lg"
            >
                {category[1].fields.map((field, index) => (
                    <p
                        key={index}
                        style={
                            field.width
                                ? { width: field.width }
                                : { flex: field.flex }
                        }
                        className="text-center"
                    >
                        {field.name}
                    </p>
                ))}
            </div>

            {/*//* List Item */}
            <div className="flex flex-col gap-[10px]">
                {props.books.map((book, index) => (
                    <ManageItem
                        data={book}
                        category={category[1].fields}
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

import React from "react";
import PropTypes from "prop-types";
import ManageList from "./ManageList";
import AdminNav from "./AdminNav";
import Card from "./../elements/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faCartShopping,
    faHandHoldingDollar,
    faList,
} from "@fortawesome/free-solid-svg-icons";

const AdminPage = (props) => {
    return (
        <div
            className="flex gap-[30px] justify-between 
        "
        >
            <AdminNav></AdminNav>
            <div className="flex flex-col gap-[30px]">
                <div className="flex justify-between items-center ">
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                </div>
                <ManageList books={props.books}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;

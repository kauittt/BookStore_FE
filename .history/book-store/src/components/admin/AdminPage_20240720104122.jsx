import React from "react";
import PropTypes from "prop-types";
import ManageList from "./ManageList";
import AdminNav from "./AdminNav";
import Card from "./../elements/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
import ManageTitle from './ManageTitle';
    faCircleUser,
    faCartShopping,
    faHandHoldingDollar,
    faList,
} from "@fortawesome/free-solid-svg-icons";

const AdminPage = (props) => {
    return (
        <div
            className="flex gap-[30px] justify-between 
        max-h-full
        "
        >
            <AdminNav></AdminNav>
            <div className="flex flex-col gap-[30px] p-[20px]">
                <div className="flex justify-between items-center ">
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                    <Card name="Sản phẩm" quantity="15" icon={faList}></Card>
                </div>
                <ManageTitle></ManageTitle>
                <ManageList books={props.books}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;

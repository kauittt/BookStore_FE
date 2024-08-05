import React from "react";
import PropTypes from "prop-types";
import ManageList from "./ManageList";
import AdminNav from "./AdminNav";
import Card from "./../elements/Card";
import ManageTitle from "./ManageTitle";
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
        max-h-screen overflow-hidden
        "
        >
            {/*//* Left  */}
            <AdminNav></AdminNav>

            {/*//* Right  */}
            <div className="flex flex-col gap-[20px] pt-[20px] pr-[20px]">
                {/*//* Cards  */}
                <div className="flex justify-between items-center ">
                    <Card name="Sản phẩm" quantity={15} icon={faList}></Card>
                    <Card name="Sản phẩm" quantity={15} icon={faList}></Card>
                    <Card name="Sản phẩm" quantity={15} icon={faList}></Card>
                    <Card name="Sản phẩm" quantity={15} icon={faList}></Card>
                </div>

                {/*//* Title  */}
                <ManageTitle
                    name="Quản lý khách hàng"
                    button="Add User"
                ></ManageTitle>

                {/*//* List  */}
                <ManageList books={props.books}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;

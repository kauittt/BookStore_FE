import React from "react";
import PropTypes from "prop-types";
import ManageList from "./ManageList";
import AdminNav from "./AdminNav";
import Card from "./../elements/Card";

const AdminPage = (props) => {
    return (
        <div className="flex gap-[30px] justify-between ">
            <AdminNav></AdminNav>
            <div>
            <div>
            <Card name="Sản phẩm" quantity="15" icon={faList}></Card> */}
            {/* <Card name="Sản phẩm" quantity="15" icon={faList}></Card> */}
            {/* <Card name="Sản phẩm" quantity="15" icon={faList}></Card> */}
            {/* <Card name="Sản phẩm" quantity="15" icon={faList}></Card>

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

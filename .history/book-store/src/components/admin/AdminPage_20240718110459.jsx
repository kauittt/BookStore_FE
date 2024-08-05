import React from "react";
import PropTypes from "prop-types";
import ManageList from "./ManageList";
import AdminNav from "./AdminNav";

const AdminPage = (props) => {
    return (
        <div>
            <AdminNav></AdminNav>
            <div>
                <ManageList books={props.books}></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;

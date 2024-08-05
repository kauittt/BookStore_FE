import React from "react";
import PropTypes from "prop-types";
import ManageList from "./ManageList";

const AdminPage = (props) => {
    return (
        <div>
            <AdminNav></AdminNav>
            <div>
                <ManageList></ManageList>
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;
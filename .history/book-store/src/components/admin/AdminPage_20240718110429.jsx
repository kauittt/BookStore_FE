import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
import AdminNav from './AdminNav';
import ManageList from './ManageList';
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";

const AdminPage = (props) => {
    return <div>
        <AdminNav></AdminNav>
        <div>
            <ManageList></ManageList>
        </div>
    </div>;
};

AdminPage.propTypes = {
    books: PropTypes.array,
};
export default AdminPage;

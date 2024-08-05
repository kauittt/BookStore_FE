import React from "react";
import { Routes } from "react-router-dom";
import Login from "../pages/Login";
import AdminPage from "../admin/AdminPage";
import Cart from "../cart/Cart";

const AnimateRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    );
};

export default AnimateRoute;

import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import AdminPage from "../admin/AdminPage";
import MainPage from "../pages/MainPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import BookDetailPage from "./../pages/BookDetailPage";
import BookPage from "../pages/BookPage";

const AnimateRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<AdminPage />} />

            <Route path="/" element={<MainPage />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/books" element={<BookPage />} />
                <Route path="/books/:id" element={<BookDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Route>

            <Route
                path="*"
                element={
                    <div className="text-center text-[100px]">
                        PAGE NOT FOUND
                    </div>
                }
            />
        </Routes>
    );
};

export default AnimateRoute;

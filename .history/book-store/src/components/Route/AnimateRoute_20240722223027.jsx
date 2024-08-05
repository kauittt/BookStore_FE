import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import AdminPage from "../admin/AdminPage";
import Cart from "../cart/Cart";
import MainPage from "../pages/MainPage";
import BookDetail from "../book/BookDetail";

const AnimateRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/admin" element={<AdminPage />} />

            <Route path="/" element={<MainPage />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/book/:id" element={<BookDetail />} />
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

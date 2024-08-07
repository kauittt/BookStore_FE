import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoute from "./components/Route/AnimateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectUser } from "./redux/Reducer/userSlice";
import { getBookGrouped } from "./redux/Action/bookAction";
import { getCartInfoById } from "./redux/Action/cartAction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    //! Width - Height: 1536 - 703
    //! 270 - 255
    //! Width: 0.9
    //! Height: 0.585

    //* Semibold - Normal
    //* 3xl (Tiêu đề to) - lg (To hơn bình thường) - sm (Chú thích nhỏ) - Normal

    //! Sửa chổ quantity*price trong tính cart, checkout
    //! Admin: Xem lại data

    //? Cần hoàn thành:
    //* UserPage, CheckoutPage

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        if (user && user.id) {
            dispatch(getCartInfoById(user.id));
            dispatch(getBookGrouped());
        } else {
            console.log("No user found in localStorage");
        }
    }, [dispatch, user]);

    return (
        <Router>
            <AnimateRoute></AnimateRoute>
            <ToastContainer />
        </Router>
    );
};

export default App;

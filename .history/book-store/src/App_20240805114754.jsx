import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoute from "./components/Route/AnimateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserSuccess } from "./redux/Reducer/userSlice";
import { getBookGrouped } from "./redux/Action/bookAction";
import { getCartInfo } from "./redux/Action/cartAction";

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

    useEffect(() => {
        console.log("useEffect to load data...");
        //* User
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch(getUserSuccess(user));

            //* Cart
            dispatch(getCartInfo(user.id));
        }

        //* Book
        dispatch(getBookGrouped());
    }, [dispatch]);

    return (
        <Router>
            <AnimateRoute></AnimateRoute>
        </Router>

        // // container mx-auto
        // <div className="text-text-normal  cursor-default select-none">
        //     <Nav></Nav>
        //     {/* <Card name="Sản phẩm" quantity="15" icon={faList}></Card> */}

        //     {/* <AdminPage books={enhancedData}></AdminPage> */}
        //     {/* <ManageList books={enhancedData}></ManageList> */}
        //     {/* <AdminNav></AdminNav> */}
        //     {/* <Checkout books={enhancedData}></Checkout> */}
        //     {/* <Cart books={enhancedData}></Cart> */}
        //     {/* <CartItem book={detail}></CartItem> */}
        // <BookDetail book={detail}></BookDetail>
        //     {/* <BookList title="Classic" books={data}></BookList> */}
        //     {/* <Login></Login> */}
        // </div>
    );
};

export default App;

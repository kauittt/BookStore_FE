import BookItem from "./components/book/BookItem";
import BookList from "./components/book/BookList";
import BookDetail from "./components/book/BookDetail";
import CartItem from "./components/cart/CartItem";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import AdminNav from "./components/admin/AdminNav";
import ManageList from "./components/admin/ManageList";
import AdminPage from "./components/admin/AdminPage";
import Card from "./components/elements/Card";
import Login from "./components/pages/Login";
import Nav from "./components/navbar/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "./components/Route/AnimateRoute";
import AnimateRoute from "./components/Route/AnimateRoute";

const App = () => {
    //! Width - Height: 1536 - 703
    //! 270 - 255
    //! Width: 0.9
    //! Height: 0.585

    //* Semibold - Normal
    //* 3xl (Tiêu đề to) - lg (To hơn bình thường) - sm (Chú thích nhỏ) - Normal

    const detail = {
        image: "https://nhasachphuongnam.com/images/thumbnails/240/290/detailed/287/con-duong-hoi-giao-tb-2024.jpg",
        price: "5.9",
        name: "Dune",
        author: "Frank Herbert ",
        quantity: 10,
        description:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections",
    };

    //! Sửa chổ quantity*price trong tính cart, checkout

    //! Admin: Xem lại data
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

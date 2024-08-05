import { BrowserRouter as Router } from "react-router-dom";
import AnimateRoute from "./components/Route/AnimateRoute";

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
    // UserPage, CheckoutPage
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

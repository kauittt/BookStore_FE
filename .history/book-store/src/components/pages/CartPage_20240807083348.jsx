import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { selectCart } from "../../redux/Reducer/cartSlice";
import { useEffect } from "react";
import { getCartInfoById } from "../../redux/Action/cartAction";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
    const dispatch = useDispatch();

    let cart = useSelector(selectCart);
    useEffect(() => {
        if (!cart) {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                dispatch(getCartInfoById(user.id));
            }
        }
    }, [dispatch, cart]);

    return (
        <div className="container mx-auto pb-[50px]">
            <Cart books={cart.books}></Cart>
            <ToastContainer />
        </div>
    );
};

export default CartPage;

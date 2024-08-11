import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import {
    selectCart,
    selectCartError,
    setCartError,
} from "../../redux/Reducer/cartSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
    const dispatch = useDispatch();
    const cartError = useSelector(selectCartError);
    let cart = useSelector(selectCart);

    useEffect(() => {
        if (cartError) {
            const error = `You have reached the maximum stock limit for this book.`;
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(setCartError(null));
        }
    }, [cartError, dispatch]);

    return (
        <div className="container mx-auto pb-[50px]">
            <Cart books={cart.books}></Cart>
        </div>
    );
};

export default CartPage;

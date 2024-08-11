import { useDispatch, useSelector } from "react-redux";
import Checkout from "../checkout/Checkout";
import { selectCart } from "../../redux/Reducer/cartSlice";
import { selectUser } from "../../redux/Reducer/userSlice";
import { getCartInfoById } from "../../redux/Action/cartAction";
import { useEffect } from "react";
import {
    selectOrdersError,
    setOrderError,
} from "../../redux/Reducer/orderSlice";
import { toast } from "react-toastify";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const user = useSelector(selectUser);
    const orderError = useSelector(selectOrdersError);
    console.log("Cart Page");
    console.log(cart);

    if (!cart) {
        dispatch(getCartInfoById(user.id));
    }

    useEffect(() => {
        if (orderError) {
            const error =
                "An error occurred during the order, please try again.";
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch(setOrderError(null));
        }
    }, [cartError, dispatch]);

    return (
        <div>
            <Checkout books={cart?.books}></Checkout>
        </div>
    );
};

export default CheckoutPage;

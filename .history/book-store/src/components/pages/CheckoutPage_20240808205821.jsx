import { useDispatch, useSelector } from "react-redux";
import Checkout from "../checkout/Checkout";
import { selectCart } from "../../redux/Reducer/cartSlice";
import { selectUser } from "../../redux/Reducer/userSlice";
import { useEffect } from "react";
import { getCartInfoById } from "../../redux/Action/cartAction";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const user = useSelector(selectUser);
    console.log(cart);

    useEffect(() => {
        if (user && !cart) {
            dispatch(getCartInfoById(user.id));
        } else {
            console.log("No user found in localStorage");
        }
    }, [dispatch, user, cart]);
    return (
        <div>
            <Checkout books={cart.books}></Checkout>
        </div>
    );
};

export default CheckoutPage;

import { useDispatch, useSelector } from "react-redux";
import Checkout from "../checkout/Checkout";
import { selectCart } from "../../redux/Reducer/cartSlice";
import { selectUser } from "../../redux/Reducer/userSlice";
import { getCartInfoById } from "../../redux/Action/cartAction";

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const user = useSelector(selectUser);
    console.log("Cart Page ");
    console.log(cart);

    if (!cart) {
        dispatch(getCartInfoById(user.id));
    }

    return (
        <div>
            <Checkout books={cart?.books}></Checkout>
        </div>
    );
};

export default CheckoutPage;

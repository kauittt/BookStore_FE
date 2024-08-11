import { useSelector } from "react-redux";
import Checkout from "../checkout/Checkout";
import { selectCart } from "../../redux/Reducer/cartSlice";

const CheckoutPage = () => {
    let cart = useSelector(selectCart);
    console.log(cart);
    return (
        <div>
            <Checkout books={cart.books}></Checkout>
        </div>
    );
};

export default CheckoutPage;

import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { selectCart } from "../../redux/Reducer/cartSlice";
import { getCartInfo } from "../../redux/Action/cartAction";
import { useEffect } from "react";

const CartPage = () => {
    const dispatch = useDispatch();

    let cart = useSelector(selectCart);

    useEffect(() => {
        if (!cart.books || cart.books.length === 0) {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                dispatch(getCartInfo(user.id));
            }
        }
    }, [dispatch, cart]);

    return (
        <div className="container mx-auto pb-[50px]">
            <Cart books={cart.books}></Cart>
        </div>
    );
};

export default CartPage;

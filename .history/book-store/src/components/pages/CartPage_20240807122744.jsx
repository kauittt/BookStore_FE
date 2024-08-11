import { useDispatch, useSelector } from "react-redux";
import Cart from "../cart/Cart";
import { selectCart, selectCartError } from "../../redux/Reducer/cartSlice";
import { useEffect } from "react";
import { getCartInfoById } from "../../redux/Action/cartAction";
import { selectUser } from "../../redux/Reducer/userSlice";

const CartPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const cartError = useSelector(selectCartError);
    console.log(cartError);

    let cart = useSelector(selectCart);
    useEffect(() => {
        if (!cart) {
            if (user) {
                dispatch(getCartInfoById(user.id));
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

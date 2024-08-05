import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = (props) => {
    return (
        <div className="">
            <div
                className="flex items-center justify-between
                border-t border-b border-border
                text-center
                p-[10px] gap-[5px]
                font-semibold"
            >
                <p className="">Image</p>
                <p className="">Name</p>
                <p className="">Price</p>
                <p className="">Quantity</p>
                <p className="">Total</p>
                <p className="">Remove</p>
            </div>
            <div className="">
                {props.books?.map((book, index) => (
                    <CartItem book={book} key={index}></CartItem>
                ))}
            </div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array,
};

export default Cart;

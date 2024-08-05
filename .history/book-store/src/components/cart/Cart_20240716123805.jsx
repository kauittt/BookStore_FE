import PropTypes from "prop-types";
import CartItem from "./CartItem";
import FormButton from "../elements/FormButton";

const Cart = (props) => {
    return (
        <div className="">
            {/*//* Title  */}
            <div
                className="flex items-center justify-between
                border-t border-b border-border
                text-center
                p-[10px] gap-[5px]
                font-semibold"
            >
                <p className="w-[128px]">Image</p>
                <p className="w-[700px]">Name</p>
                <p className="w-[125px]">Price</p>
                <p className="w-[128px]">Quantity</p>
                <p className="w-[125px]">Total</p>
                <p className="w-[50px]">Remove</p>
            </div>

            {/*//* Cart Items */}
            <div className="flex flex-col">
                {props.books?.map((book, index) => (
                    <CartItem book={book} key={index}></CartItem>
                ))}
            </div>

            <div
                className="flex justify-end
                mt-[20px]"
            >
                <p className="font-semibold">
                    {"Total: "}
                    <span className="text-lg text-text-color">9999$</span>
                </p>
                <FormButton></FormButton>
            </div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array,
};

export default Cart;

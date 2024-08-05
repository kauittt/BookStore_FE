import PropTypes from "prop-types";
import CartItem from "./CartItem";
import FormButton from "../elements/FormButton";
import { useEffect, useState } from "react";

const Cart = (props) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        props.books.forEach((book) => {
            total += book.price * book.quantity;
        });
        setTotalPrice(total);
    }, [props.books]);

    const updateTotalPrice = (priceChange) => {
        setTotalPrice(
            (prevTotal) => parseFloat(prevTotal) + parseFloat(priceChange)
        );
    };

    const handleRemove = () => {
        console.log("Handle remove: Line24 - Cart.jsx");
    };

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
                    <CartItem
                        book={book}
                        key={index}
                        updateTotalPrice={updateTotalPrice}
                    ></CartItem>
                ))}
            </div>

            <div
                className="flex flex-col items-end justify-center gap-[10px]
                mt-[20px]"
            >
                <p className="font-semibold text-2xl">
                    {"Total: "}
                    <span className="text-lg text-text-color">
                        {totalPrice.toFixed(2)}$
                    </span>
                </p>
                <FormButton
                    name={"Checkout"}
                    onClick={handleRemove}
                ></FormButton>
            </div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array,
};

export default Cart;

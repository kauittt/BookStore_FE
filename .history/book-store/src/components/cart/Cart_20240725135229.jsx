import PropTypes from "prop-types";
import CartItem from "./CartItem";
import FormButton from "../elements/FormButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    // border-t border-b border-border

    return (
        <div className="">
            {/*//* Title  */}
            <div
                className="flex items-center justify-between gap-[5px]
                text-center h-[60px]  p-[10px] bg-bgr-main font-semibold
                rounded"
            >
                <p className="w-[80px]">Image</p>

                <div className="bg-border w-px h-full"></div>
                <p className="flex-1">Name</p>

                <div className="bg-border w-px h-full"></div>
                <p className="w-[100px]">Price</p>

                <div className="bg-border w-px h-full"></div>
                <p className="w-[128px]">Quantity</p>

                <div className="bg-border w-px h-full"></div>
                <p className="w-[100px]">Total</p>

                <div className="bg-border w-px h-full"></div>
                <p className="w-[65px]">Remove</p>
            </div>

            {/*//* Cart Items */}
            <div className="flex flex-col">
                {props.books?.map((book, index) => (
                    <CartItem
                        book={book}
                        key={index}
                        updateTotalPrice={updateTotalPrice}
                        handleRemove={handleRemove}
                    ></CartItem>
                ))}
            </div>

            {/*//* Money - Button  */}
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
                    onClick={() => {
                        navigate("/checkout");
                    }}
                    name={"Checkout"}
                ></FormButton>
            </div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array,
};

export default Cart;

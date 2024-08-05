import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";

const CartItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;

    const [quantity, setQuantity] = useState(book.quantity); // Default quantity

    const increment = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity((prev) => prev - 1);
        }
    };
    return (
        <div
            className="flex items-center justify-between
            border-t border-b border-border
            h-[105px] text-center
            
            mt-[50px]
            
            "
        >
            {/*//* Image  */}
            <div
                className="w-[128px] h-full
                p-[10px]"
            >
                <img
                    className="w-full h-full object-cover"
                    src={book.image}
                    alt="Image"
                />
            </div>

            {/*//*  Name */}
            <p
                className="text-lg font-semibold flex-1
                w-[700px] p-[10px] "
            >
                {name}
            </p>

            {/*//* Price  */}
            <p className="w-[125px]  p-[10px]">{book.price}$</p>

            {/*//* Quantity  */}
            <div className="w-[128px] p-[10px]">
                <QuantitySelector
                    quantity={quantity}
                    increment={increment}
                    decrement={decrement}
                ></QuantitySelector>
            </div>

            {/*//* Total Price  */}
            <p className="w-[125px] p-[10px]">????</p>

            {/*//* Trash Icon  */}
            <FontAwesomeIcon
                className=" p-[16.25px]
                text-xl hover:text-text-error 
                transition-all duration-200 ease-in-out cursor-pointer"
                icon={faTrash}
            />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
};

export default CartItem;

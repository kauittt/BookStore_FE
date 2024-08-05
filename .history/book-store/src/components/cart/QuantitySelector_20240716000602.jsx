import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(0); // Default quantity

    const increment = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <form className="max-w-xs mx-auto">
            <div className="relative flex items-center max-w-[8rem]">
                <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg p-[10px] cursor-pointer 
                    hover:bg-text-color hover:text-text-white rounded
                     transition duration-200 ease-in-out"
                    onClick={decrement}
                />
                <input
                    type="text"
                    id="quantity-input"
                    value={quantity}
                    readOnly
                    className="w-[30px] text-center 
                    border-0 focus:ring-0"
                    required
                />
                <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg p-[10px] cursor-pointer
                     hover:bg-text-color hover:text-text-white rounded
                     transition duration-200 ease-in-out"
                    onClick={increment}
                />
            </div>
        </form>
    );
};

export default QuantitySelector;

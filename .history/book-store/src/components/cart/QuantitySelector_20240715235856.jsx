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
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    onClick={decrement}
                />
                <input
                    type="text"
                    id="quantity-input"
                    value={quantity}
                    readOnly
                    placeholder="0"
                    required
                />
                <FontAwesomeIcon
                    icon={faPlus}
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    onClick={increment}
                />
            </div>
        </form>
    );
};

export default QuantitySelector;

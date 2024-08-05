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
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="bg-gray-50 dark:bg-gray-700 border-x-0 border-gray-300 dark:border-gray-600 text-center text-sm text-gray-900 dark:text-white h-11 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
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

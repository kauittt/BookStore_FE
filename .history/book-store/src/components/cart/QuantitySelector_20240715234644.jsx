import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(0); // Default quantity set to 999

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
                <button
                    type="button"
                    onClick={decrement}
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                    <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        fill="none"
                        viewBox="0 0 18 2"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    id="quantity-input"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-700 border-x-0 border-gray-300 dark:border-gray-600 text-center text-sm text-gray-900 dark:text-white h-11 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                    placeholder="999"
                    required
                />
                <button
                    type="button"
                    onClick={increment}
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                    <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        fill="none"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default QuantitySelector;

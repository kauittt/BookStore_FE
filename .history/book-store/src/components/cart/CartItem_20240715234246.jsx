import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;
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
                <form class="max-w-xs mx-auto">
                    <label
                        for="quantity-input"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Choose quantity:
                    </label>
                    <div class="relative flex items-center max-w-[8rem]">
                        <button
                            type="button"
                            id="decrement-button"
                            data-input-counter-decrement="quantity-input"
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h16"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            id="quantity-input"
                            data-input-counter
                            aria-describedby="helper-text-explanation"
                            class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="999"
                            required
                        />
                        <button
                            type="button"
                            id="increment-button"
                            data-input-counter-increment="quantity-input"
                            class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                            <svg
                                class="w-3 h-3 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 1v16M1 9h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <p
                        id="helper-text-explanation"
                        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                        Please select a 5 digit number from 0 to 9.
                    </p>
                </form>
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

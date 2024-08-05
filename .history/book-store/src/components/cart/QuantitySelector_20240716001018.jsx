import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const QuantitySelector = (props) => {
    return (
        <form className="max-w-xs mx-auto">
            <div className="relative flex items-center max-w-[8rem]">
                <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg p-[10px] cursor-pointer 
                    hover:bg-text-color hover:text-text-white rounded
                     transition duration-200 ease-in-out"
                    onClick={props.decrement}
                />
                <p className="w-[30px] text-center ">{props.quantity}</p>
                <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg p-[10px] cursor-pointer
                     hover:bg-text-color hover:text-text-white rounded
                     transition duration-200 ease-in-out"
                    onClick={props.increment}
                />
            </div>
        </form>
    );
};

QuantitySelector.propTypes = {
    quantity: PropTypes.string,
    decrement: PropTypes.func,
    increment: PropTypes.func,
};

export default QuantitySelector;

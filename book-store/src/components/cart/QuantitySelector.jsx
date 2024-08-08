import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const QuantitySelector = (props) => {
    return (
        <form className="max-w-xs mx-auto flex justify-center">
            <div className="relative flex items-center max-w-[8rem]">
                <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg p-[10px] cursor-pointer text-text-color
                    hover:bg-text-color hover:text-text-white rounded
                     transition duration-200 ease-in-out"
                    onClick={() => props.handleChangeQuantity(-1)}
                />
                <p className="w-[30px] text-center ">{props.quantity}</p>
                <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg p-[10px] cursor-pointer text-text-color
                     hover:bg-text-color hover:text-text-white rounded
                     transition duration-200 ease-in-out"
                    onClick={() => props.handleChangeQuantity(1)}
                />
            </div>
        </form>
    );
};

QuantitySelector.propTypes = {
    quantity: PropTypes.number,
    handleChangeQuantity: PropTypes.func,
};

export default QuantitySelector;

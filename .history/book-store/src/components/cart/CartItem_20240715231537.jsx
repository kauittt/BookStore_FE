import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
    return (
        <div>
            {/*//* Image  */}
            <div>
                <img src={props.image} alt="Image" />
            </div>

            {/*//*  Name */}
            <p></p>

            {/*//* Price  */}
            <div></div>

            {/*//* Total Price  */}
            <p></p>

            {/*//* Trash Icon  */}
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
};

export default CartItem;

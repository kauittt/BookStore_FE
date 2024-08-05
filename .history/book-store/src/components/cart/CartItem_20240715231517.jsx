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

            {/*//*   */}
            <p></p>

            {/*//*   */}
            <div></div>

            {/*//*   */}
            <p></p>

            {/*//*   */}
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
};

export default CartItem;

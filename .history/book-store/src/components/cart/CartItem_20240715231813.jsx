import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;
    return (
        <div>
            {/*//* Image  */}
            <div>
                <img src={book.image} alt="Image" />
            </div>

            {/*//*  Name */}
            <p>{name}</p>

            {/*//* Price  */}
            <p>{book.price}$</p>

            {/*//* Quantity  */}
            <div></div>

            {/*//* Total Price  */}
            <p>????</p>

            {/*//* Trash Icon  */}
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
};

export default CartItem;

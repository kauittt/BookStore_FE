import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;
    return (
        <div
            className="flex items-center justify-centers
            h-[105px] bg-bgr-color-hover"
        >
            {/*//* Image  */}
            <div className="w-[128px] h-[full] bg-bgr-main">
                <img
                    className="w-[full] h-[full] object-cover"
                    src={book.image}
                    alt="Image"
                />
            </div>

            {/*//*  Name */}
            <p
                className="text-lg font-semibold
                w-[700px]"
            >
                {name}
            </p>

            {/*//* Price  */}
            <p className="w-[125px]">{book.price}$</p>

            {/*//* Quantity  */}
            <div className="w-[128px]"></div>

            {/*//* Total Price  */}
            <p className="w-[125px]">????</p>

            {/*//* Trash Icon  */}
            <FontAwesomeIcon className="w-[50px]" icon={faTrash} />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
};

export default CartItem;

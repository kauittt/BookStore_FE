import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;
    return (
        <div className="flex items-center justify-centers">
            {/*//* Image  */}
            <div className="w-[80px] h-[80px]">
                <img
                    className="w-full h-full object-cover"
                    src={book.image}
                    alt="Image"
                />
            </div>

            {/*//*  Name */}
            <p className=" text-lg font-semibold">{name}</p>

            {/*//* Price  */}
            <p className="">{book.price}$</p>

            {/*//* Quantity  */}
            <div className=""></div>

            {/*//* Total Price  */}
            <p className="">????</p>

            {/*//* Trash Icon  */}
            <FontAwesomeIcon className="" icon={faTrash} />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
};

export default CartItem;

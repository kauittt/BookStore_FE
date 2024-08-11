import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/Reducer/userSlice";
import { updateCart } from "../../redux/Action/cartAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const book = props.book;
    const name = book.name + " - " + book.author;

    const [quantity, setQuantity] = useState(props.quantity);

    const calculateTotal = () => {
        const total = (quantity * book.price).toFixed(2);
        return total;
    };

    const handleChangeQuantity = async (quantity) => {
        try {
            const response = await dispatch(
                updateCart(user.id, props.book.id, quantity)
            );
            setQuantity((prev) => prev + quantity);
            console.log(response);
        } catch (e) {
            const error = `Not enough stock for ${book.name}`;
            toast.error(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div
            className="flex items-center justify-between
            border-t border-b border-border
            h-[105px] text-center
            p-[10px] gap-[5px]
            "
        >
            {/*//* Image  */}
            <div className="flex flex-center w-[80px] h-full">
                <img
                    className="w-[60px] h-full object-cover"
                    src={book.image}
                    alt="Image"
                />
            </div>

            {/* Vertical Divider */}
            <div className="bg-border w-px h-full"></div>

            {/*//*  Name */}
            <p className="text-lg flex-1">{name}</p>

            {/* Vertical Divider */}
            <div className="bg-border w-px h-full"></div>

            {/*//* Price  */}
            <p className="w-[100px]  ">{book.price}$</p>

            {/* Vertical Divider */}
            <div className="bg-border w-px h-full"></div>

            {/*//* Quantity  */}
            <div className="w-[128px] ">
                <QuantitySelector
                    quantity={quantity}
                    handleChangeQuantity={handleChangeQuantity}
                ></QuantitySelector>
                <ToastContainer />
            </div>

            {/* Vertical Divider */}
            <div className="bg-border w-px h-full"></div>

            {/*//* Total Price  */}
            <p className="w-[100px] ">{calculateTotal()}$</p>

            {/* Vertical Divider */}
            <div className="bg-border w-px h-full"></div>

            {/*//* Trash Icon  */}
            <FontAwesomeIcon
                className=" p-[23.75px]
                text-xl hover:text-text-error 
                transition-all duration-200 ease-in-out cursor-pointer"
                icon={faTrash}
                onClick={props.handleRemove}
            />
        </div>
    );
};

CartItem.propTypes = {
    book: PropTypes.object,
    quantity: PropTypes.number,
    handleRemove: PropTypes.func,
};

export default CartItem;

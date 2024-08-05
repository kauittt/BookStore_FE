import PropTypes from "prop-types";

const Cart = (props) => {
    return (
        <div className="">
            <div
                className="flex items-center justify-between
            font-semibold"
            >
                <p className="">Image</p>
                <p className="">Name</p>
                <p className="">Price</p>
                <p className="">Quantity</p>
                <p className="">Total</p>
                <p className="">Remove</p>
            </div>
            <div className=""></div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array,
};

export default Cart;

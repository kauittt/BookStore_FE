import PropTypes from "prop-types";

const Cart = (props) => {
    return (
        <div>
            <div>
                <p>Image</p>
                <p>Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <div></div>
        </div>
    );
};

Cart.propTypes = {
    books: PropTypes.array,
};

export default Cart;

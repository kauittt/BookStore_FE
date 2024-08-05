import PropTypes from "prop-types";

const Checkout = () => {
    return <div></div>;
};

Checkout.propTypes = {
    book: PropTypes.object,
    updateTotalPrice: PropTypes.func,
    handleRemove: PropTypes.func,
};

export default Checkout;

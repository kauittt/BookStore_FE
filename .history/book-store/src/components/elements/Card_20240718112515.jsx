import React from "react";
import PropTypes from "prop-types";

const Card = () => {
    return (
        <div>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    );
};

Card.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    quantity: PropTypes.number,
    name: PropTypes.string,
};
export default Card;

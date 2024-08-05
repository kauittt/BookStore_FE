import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = () => {
    return (
        <div className="">
            <div className="">
                <p className=""></p>
                <p className=""></p>
            </div>
            <FontAwesomeIcon icon="faGauge" />
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

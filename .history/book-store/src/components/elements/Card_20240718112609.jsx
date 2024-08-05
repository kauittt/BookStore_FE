import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
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

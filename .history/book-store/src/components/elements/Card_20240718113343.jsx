import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faCartShopping,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
const Card = () => {
    return (
        <div
            className="w-[280px] h-[100px] bg-bgr-main
        rounded shadow-custom"
        >
            <div className="">
                <p className=""></p>
                <p className=""></p>
            </div>
            <FontAwesomeIcon icon={faCircleUser} />
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faCircleUser} />
            <FontAwesomeIcon icon={faCircleUser} />
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

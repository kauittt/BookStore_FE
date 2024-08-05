import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faCartShopping,
    faHandHoldingDollar,
    faList,
} from "@fortawesome/free-solid-svg-icons";
const Card = (props) => {
    console.log(props.color);

    const color = `bg-` + props.color;
    return (
        <div
            className="flex items-center justify-between
            w-[280px] h-[100px] bg-bgr-main p-[30px]
        rounded shadow-custom"
        >
            <div className="flex flex-col gap-[10px]">
                <p className="text-lg text-text-light font-semibold">
                    {props.name}
                </p>
                <p className="text-2xl font-semibold">{props.quantity}</p>
            </div>
            <FontAwesomeIcon
                className={`p-[17px] rounded-full text-text-white`}
                style={{ backgroundColor: props.color }}
                icon={props.icon}
            />
            {/* <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            <FontAwesomeIcon icon={faCircleUser} /> */}
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    icon: PropTypes.object,
    color: PropTypes.string,
};
export default Card;

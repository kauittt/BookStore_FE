import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faCartShopping,
    faHandHoldingDollar,
    faList,
} from "@fortawesome/free-solid-svg-icons";
const Card = () => {
    return (
        <div
            className="flex items-center justify-between
            w-[280px] h-[100px] bg-bgr-main p-[30px]
        rounded shadow-custom"
        >
            <div className="flex flex-col gap-[10px]">
                <p className="text-lg text-text-light font-semibold">
                    Sản phẩm
                </p>
                <p className="text-2xl font-semibold">15</p>
            </div>
            <FontAwesomeIcon className="p-[17px] rounded-full" icon={faList} />
            {/* <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            <FontAwesomeIcon icon={faCircleUser} /> */}
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

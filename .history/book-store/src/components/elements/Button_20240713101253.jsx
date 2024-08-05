import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <div
            className={`m-w-[400px] w-[400px] m-h-[60px] h-[60px] rounded text-2xl font-semibold
            ${props.main ? "bg-bgr-white" : "bg-bgr-color"}
            ${props.main ? "text-text-color" : "text-text-white"}
            `}
        >
            {props.content}
        </div>
    );
};

Button.propTypes = {
    main: PropTypes.bool,
    content: PropTypes.string,
};

export default Button;

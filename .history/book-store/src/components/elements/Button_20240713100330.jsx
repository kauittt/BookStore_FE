import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <div
            className={`m-w-[400px] w-[400px] m-h-[60px] h-[60px] ${
                props.main ? "bg-bgr-main" : "bg-bgr-color"
            }`}
        >
            {props.content}
        </div>
    );
};

Button.propTypes = {
    main: PropTypes.string,
    content: PropTypes.string,
};

export default Button;

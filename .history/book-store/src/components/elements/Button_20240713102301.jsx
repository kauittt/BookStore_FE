import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
    props.main ? console.log("main") : console.log("not main");
    return (
        <div
            className={`m-w-[400px] w-[400px] m-h-[60px] h-[60px] leading-[60px]
            rounded text-2xl font-semibold 
            flex items-center justify-center
            ${props.main ? "bg-bgr-white" : "bg-bgr-color"}
            ${props.main ? "text-text-color" : "text-text-white"}
            `}
            style={{
                lineHeight: "60px",
            }}
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

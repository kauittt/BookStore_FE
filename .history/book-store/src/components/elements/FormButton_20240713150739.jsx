import PropTypes from "prop-types";

const FormButton = (props) => {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            className={`m-w-[100px] w-[100px] m-h-[40px] h-[40px] leading-[40px]
            rounded text-lg font-semibold 
            flex items-center justify-center
            cursor-pointer
            transition duration-150 ease-in-out
            bg-bgr-white
            ${props.main ? "bg-bgr-white" : "bg-bgr-white"}
            ${props.main ? "text-text-color" : "text-bgr-color"}
            ${
                props.main
                    ? "border border-text-color hover:bg-text-color hover:text-text-white"
                    : "border border-bgr-color hover:bg-bgr-color hover:text-text-white"
            }
            `}
        >
            {props.name}
        </button>
    );
};

FormButton.propTypes = {
    main: PropTypes.bool,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

FormButton.defaultProps = {
    main: true,
    type: "button",
    disabled: false,
};

export default FormButton;

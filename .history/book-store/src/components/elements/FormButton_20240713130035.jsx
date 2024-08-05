import PropTypes from "prop-types";

const FormButton = (props) => {
    return (
        <div
            className={`m-w-[100px] w-[100px] m-h-[40px] h-[40px] leading-[40px]
            rounded text-lg font-semibold 
            flex items-center justify-center
            cursor-pointer
            ${props.main ? "bg-bgr-white" : "bg-bgr-color"}
            ${props.main ? "text-text-color" : "text-text-white"}
            ${props.main ? "border border-text-color" : ""}
            `}
        >
            {props.content}
        </div>
    );
};

FormButton.propTypes = {
    main: PropTypes.bool,
    content: PropTypes.string,
};

FormButton.defaultProps = {
    main: true,
    content: "Button",
};

export default FormButton;

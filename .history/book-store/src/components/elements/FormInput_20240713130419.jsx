import PropTypes from "prop-types";

const FormInput = (props) => {
    const inputID = props.name.toLowerCase();

    return (
        <div className="flex flex-col gap-[10px] w-[400px]  text-lg">
            <label className="font-semibold" htmlFor={inputID}>
                {props.name}
            </label>
            <input
                autoComplete="off"
                name={inputID}
                id={inputID}
                className="bg-bgr-main rounded text-text-light p-4 h-[50px] text-base"
                type={props.isPassword ? "password" : "text"}
            />
        </div>
    );
};

FormInput.propTypes = {
    name: PropTypes.string,
    isPassword: PropTypes.bool,
};

FormInput.defaultProps = {
    name: "Input name",
    isPassword: false,
};

export default FormInput;

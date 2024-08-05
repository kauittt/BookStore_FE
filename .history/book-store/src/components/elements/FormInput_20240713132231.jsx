import PropTypes from "prop-types";

const FormInput = (props) => {
    const inputID = props.name.toLowerCase();

    return (
        <div
            className="flex flex-col gap-[10px] 
                        w-[400px]"
        >
            <label className="font-semibold text-lg" htmlFor={inputID}>
                {props.name}
            </label>
            <input
                autoComplete="off"
                name={inputID}
                id={inputID}
                className="bg-bgr-main p-4 h-[50px] rounded 
                        text-text-light  text-base
                        shadow focus:border-text-color "
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

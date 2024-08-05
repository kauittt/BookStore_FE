import { useField } from "formik";
import PropTypes from "prop-types";

const FormInput = ({ label, ...props }) => {
    const field = useField(props);
    console.log("Field");
    console.log(field);
    return (
        <div
            className="flex flex-col gap-[10px] 
                        w-[400px]"
        >
            <label
                className="font-semibold text-lg"
                htmlFor={props.id || props.name}
            >
                {props.label}
            </label>
            <input
                autoComplete="off"
                name={inputID}
                id={inputID}
                className="bg-bgr-main p-4 h-[50px] rounded 
                        text-text-light  text-base
                       shadow focus:outline-none focus:ring-2 focus:ring-text-color"
                type={props.isPassword ? "password" : "text"}
            />
        </div>
    );
};

FormInput.propTypes = {};

FormInput.defaultProps = {};

export default FormInput;

import { Field, useField } from "formik";
import PropTypes from "prop-types";

const FormInput = ({ label, type = "text", ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="flex flex-col gap-[10px] w-[400px]">
            <label
                className="font-semibold text-lg"
                htmlFor={props.id || props.name}
            >
                {label}
            </label>
            <Field
                autoComplete="off"
                className="bg-bgr-main p-4 h-[50px] rounded 
                    text-text-light
                    shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                    focus:outline-none focus:ring-2 focus:ring-text-color"
                {...field}
                {...props}
                type={type}
            />
            {meta.touched && meta.error ? (
                <div className="text-text-error font-medium">{meta.error}</div>
            ) : null}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

export default FormInput;

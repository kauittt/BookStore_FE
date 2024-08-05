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
                    text-text-light shadow
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

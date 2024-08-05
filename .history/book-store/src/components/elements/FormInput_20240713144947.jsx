import { useField } from "formik";
import PropTypes from "prop-types";

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
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
                {label}
            </label>
            <input
                autoComplete="off"
                className="bg-bgr-main p-4 h-[50px] rounded 
                        text-text-light  text-base
                       shadow focus:outline-none focus:ring-2 focus:ring-text-color"
                {...props}
                {...field}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm">{meta.error}</div>
            ) : null}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

FormInput.defaultProps = {
    type: "text",
};

export default FormInput;

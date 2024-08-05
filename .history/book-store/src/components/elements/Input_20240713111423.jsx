import PropTypes from "prop-types";

const Input = (props) => {
    return (
        <div className="w-[400px] h-[97px]">
            <label className="" htmlFor="">
                {props.name}
            </label>
            <input
                className="bg-bgr-main"
                type={props.isPassword ? "password" : "text"}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    isPassword: PropTypes.bool,
};

Input.defaultProps = {
    name: "Input name",
    isPassword: false,
};

export default Input;

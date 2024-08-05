import PropTypes from "prop-types";

const Input = (props) => {
    const inputID = String.ToLowercase(props.name);

    return (
        <div className="w-[400px] h-[97px] text-xl">
            <label className="font-semibold" htmlFor="">
                {props.name}
            </label>
            <input
                name=""
                id=""
                className="bg-bgr-main round"
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

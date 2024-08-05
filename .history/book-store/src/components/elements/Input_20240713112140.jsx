import PropTypes from "prop-types";

const Input = (props) => {
    const inputID = props.name.toLowerCase();

    return (
        <div className="w-[400px] h-[97px] text-xl">
            <label className="font-semibold" htmlFor="">
                {props.name}
            </label>
            <input
                name={inputID}
                id={inputID}
                className="bg-bgr-main rounded"
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

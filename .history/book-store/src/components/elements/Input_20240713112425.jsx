import PropTypes from "prop-types";

const Input = (props) => {
    const inputID = props.name.toLowerCase();

    return (
        <div className="flex flex-col w-[400px] h-[97px] text-xl">
            <label className="text-text-normal font-semibold" htmlFor="">
                {props.name}
            </label>
            <input
                name={inputID}
                id={inputID}
                className="bg-bgr-main rounded text-text-light p-4"
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

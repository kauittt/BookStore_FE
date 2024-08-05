import PropTypes from "prop-types";

const Input = (props) => {
    return (
        <div className="w-[400px] h-[97px]">
            <label className="" htmlFor=""></label>
            <input className="" type="text" />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
};

Input.defaultProps = {
    name: "Input name",
};

export default Input;

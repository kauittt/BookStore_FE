import PropTypes from "prop-types";

const Login = (props) => {
    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2">
                <img
                    src="./image/Login.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="w-1/2"></div>
        </div>
    );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

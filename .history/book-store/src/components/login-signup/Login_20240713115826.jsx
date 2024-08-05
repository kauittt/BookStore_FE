import PropTypes from "prop-types";
import { useState } from "react";

const Login = (props) => {
    const [purpose, setPurpose] = useState("login");

    return (
        <div className="flex w-full h-screen">
            {/*//* Image  */}
            <div className="w-1/2">
                <img
                    src="./image/Login.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>

            {/*//* Form  */}
            <div className="w-1/2">
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <p></p>
                    <p></p>
                </div>

                <form action=""></form>
            </div>
        </div>
    );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

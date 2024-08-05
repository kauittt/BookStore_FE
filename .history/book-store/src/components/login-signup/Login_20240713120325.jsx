import PropTypes from "prop-types";
import { useState } from "react";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";

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
            <div className="w-1/2 flex items-center justify-center">
                <div>
                    <img
                        src="./image/Logo.png"
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <p></p>
                    <p></p>
                </div>

                <form action="">
                    <FormInput></FormInput>
                    <FormInput></FormInput>
                    <FormInput></FormInput>
                    <FormButton></FormButton>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

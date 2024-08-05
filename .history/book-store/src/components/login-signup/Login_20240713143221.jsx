import PropTypes from "prop-types";
import { useState } from "react";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";

const Login = (props) => {
    // Chuyển qua formik
    // Thêm regex

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
            <div className="w-1/2 flex flex-col items-center justify-between p-[40px]">
                <div className="w-[90px] h-[50px]">
                    <img
                        src="./image/Logo.png"
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col w-[400px]">
                    <p className="text-text-light font-semibold text-2xl">
                        Welcome!
                    </p>
                    <p className="font-bold text-[32px]">Login your account!</p>
                </div>

                <form action="" className="flex flex-col gap-[20px]">
                    <FormInput
                        label="Name"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                    ></FormInput>
                </form>

                <div className="flex gap-[10px] flex-col">
                    <FormButton name="Login" main={false}></FormButton>
                    <FormButton name="Register"></FormButton>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

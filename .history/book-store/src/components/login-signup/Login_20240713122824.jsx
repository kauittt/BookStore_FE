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
            <div className="w-1/2 flex flex-col items-center justify-between p-[40px]">
                <div className="w-[120px] h-[78px]">
                    <img
                        src="./image/Logo.png"
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* <div className="">
                    <p className="text-text-light font-semibold text-2xl">
                        Welcome!
                    </p>
                    <p className="font-bold text-[32px]">
                        Welcome!
                    </p>
                </div> */}

                <form action="" className="flex flex-col gap-[40px]">
                    <FormInput name="Name"></FormInput>
                    <FormInput name="Email"></FormInput>
                    <FormInput name="Password" isPassword={true}></FormInput>
                </form>

                <div className="flex flex-col gap-[10px] ">
                    <FormButton></FormButton>
                    <FormButton main={false}></FormButton>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

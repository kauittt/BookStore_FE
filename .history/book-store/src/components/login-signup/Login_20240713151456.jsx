import PropTypes from "prop-types";
import { useState } from "react";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const Login = (props) => {
    // Schema validation with Yup
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(6, "Must be 6 characters or more!")
            .max(15, "Must be 15 characters or less!")
            .required("Name is required!"),
        email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
        password: Yup.string()
            .min(6, "Must be 6 characters or more!")
            .max(15, "Must be 15 characters or less!")
            .required("Password is required!"),
    });

    const [purpose, setPurpose] = useState("login");

    return (
        <div className="flex w-full h-screen">
            {/*//* Image */}
            <div className="w-1/2">
                <img
                    src="./image/Login.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>

            {/*//* Form */}
            <div className="w-1/2 flex flex-col items-center justify-evenly p-[40px]">
                {/*//* Logo */}
                <div className="w-[90px] h-[50px]">
                    <img
                        src="./image/Logo.png"
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/*//* Greeting */}
                <div className="flex flex-col w-[400px]">
                    <p className="text-text-light font-semibold text-2xl">
                        Welcome!
                    </p>
                    <p className="font-bold text-[32px]">
                        Login to your account!
                    </p>
                </div>

                {/*//* Form */}
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log("Form submitted with values:", values);
                            actions.resetForm({
                                name: "",
                                email: "",
                                password: "",
                            });
                            actions.setSubmitting(false);
                        }, 2000);

                        console.log("SUBMIT");
                        console.log(values);
                        // Handle form submission
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-[20px]">
                            <FormInput
                                label="Name"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <FormInput
                                label="E-mail"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <FormInput
                                label="Password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />

                            {/*//* Buttons */}
                            <div className="flex gap-[10px] justify-end">
                                {/*//* Register Button */}
                                <FormButton name="Register" />

                                {/*//* Login Button */}
                                <FormButton
                                    name="Login"
                                    type="submit"
                                    disabled={isSubmitting}
                                    main={false}
                                />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

Login.propTypes = {};

export default Login;

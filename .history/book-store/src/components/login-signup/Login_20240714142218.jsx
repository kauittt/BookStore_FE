import { useState } from "react";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const Login = () => {
    const [purpose, setPurpose] = useState("login");

    //* Schema validation with Yup
    const validationSchema = Yup.object({
        name:
            purpose === "register"
                ? Yup.string()
                      .min(6, "Must be 6 characters or more!")
                      .max(15, "Must be 15 characters or less!")
                      .required("Name is required!")
                : Yup.string(),
        email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
        password: Yup.string()
            .min(6, "Must be 6 characters or more!")
            .max(15, "Must be 15 characters or less!")
            .required("Password is required!"),
        confirmPassword:
            purpose === "register"
                ? Yup.string()
                      .oneOf(
                          [Yup.ref("password"), null],
                          "Passwords must match"
                      )
                      .required("Confirm Password is required")
                : Yup.string(),
    });

    console.log(window.innerHeight);
    console.log(window.innerWidth);
    return (
        <div className="flex w-full h-screen">
            {/*//! Image */}
            <div className="w-1/2">
                <img
                    src="./image/Login.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>

            {/*//! Form */}
            <div className="w-1/2 flex flex-col items-center justify-evenly p-[20px]">
                {/*//* Logo */}
                <div className="w-[90px] h-[50px]">
                    <img
                        src="./image/Logo.png"
                        alt="Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/*//* Greeting */}
                {/* <div className="flex flex-col w-[400px]">
                    <h1 className="font-semibold text-3xl italic">
                        {purpose === "login"
                            ? "Login to your account!"
                            : "Register your account!"}
                    </h1>
                </div> */}

                {/*//* Form */}
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log("Form submitted with values:", values);
                            // actions.resetForm();
                            actions.setSubmitting(false);
                        }, 500);

                        console.log("API HERE");
                        // Handle form submission
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-[20px]">
                            {purpose === "register" && (
                                <FormInput
                                    label="Name"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                />
                            )}
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
                            {purpose === "register" && (
                                <FormInput
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    type="password"
                                />
                            )}

                            {/* Buttons */}
                            <div className="flex gap-[10px] justify-end">
                                <FormButton
                                    name={
                                        purpose === "login"
                                            ? "Register"
                                            : "Login"
                                    }
                                    onClick={() =>
                                        setPurpose(
                                            purpose === "login"
                                                ? "register"
                                                : "login"
                                        )
                                    }
                                />

                                <FormButton
                                    name={
                                        purpose === "login"
                                            ? "Login"
                                            : "Register"
                                    }
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

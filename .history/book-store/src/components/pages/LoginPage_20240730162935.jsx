import { useState } from "react";
import FormButton from "../elements/FormButton";
import FormInput from "../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import LoginService from "../../services/LoginService";

const LoginPage = () => {
    const [purpose, setPurpose] = useState("login");

    //* Schema validation with Yup
    const validationSchema = Yup.object({
        username:
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
            .min(4, "Must be 4 characters or more!")
            .max(15, "Must be 15 characters or less!")
            .required("Password is required!"),
    });

    const doLogin = async (credentials) => {
        try {
            const response = await LoginService.Login(credentials);
            console.log(response);
            //     if (response.data.succeeded) {
            //         localStorage.setItem("user", JSON.stringify(response.data));
            //         if(response?.data?.user?.roles[0]=="Admin"){
            //             navigate("/admin")
            //         }else if(response?.data?.user?.roles[0]=="Member"){
            //             navigate("/home/order");
            //         }
            //     } else {
            //         response.data.errors.forEach(error => {
            //             toast.error(error.description, {
            //                 position: "top-left",
            //                 autoClose: 5000,
            //                 hideProgressBar: false,
            //                 closeOnClick: true,
            //                 pauseOnHover: true,
            //                 draggable: true,
            //                 progress: undefined,
            //             });
            //         });
            //     }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.errors
            ) {
                // error.response.data.errors.forEach(err => {
                //     toast.error(err.description, {
                //         position: "top-left",
                //         autoClose: 5000,
                //         hideProgressBar: false,
                //         closeOnClick: true,
                //         pauseOnHover: true,
                //         draggable: true,
                //         progress: undefined,
                //     });
                // });
            } else {
                // toast.error('An error occurred while logging in. Please try again.', {
                //     position: "top-left",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
            }
        }
    };

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
            <div className="w-1/2 flex flex-col items-center justify-evenly p-[20px] pt-[10px]">
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
                    <h1 className="font-semibold text-3xl ">
                        {purpose === "login"
                            ? "Login to your account!"
                            : "Register your account!"}
                    </h1>
                </div>

                {/*//* Form */}
                <Formik
                    initialValues={{
                        username: "minh",
                        email: "test@gmail.com",
                        password: "minh",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log("Form submitted with values:", values);
                            // actions.resetForm();
                            actions.setSubmitting(false);
                        }, 500);

                        doLogin(values);
                        console.log("API HERE");
                        // Handle form submission
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-[20px]">
                            {purpose === "register" && (
                                <FormInput
                                    label="E-mail"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            )}

                            <FormInput
                                label="Username"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                            />

                            <FormInput
                                label="Password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />

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

LoginPage.propTypes = {};

export default LoginPage;

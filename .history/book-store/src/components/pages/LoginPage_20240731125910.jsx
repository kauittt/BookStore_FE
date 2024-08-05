import { useEffect, useState } from "react";
import FormButton from "../elements/FormButton";
import FormInput from "../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import LoginService from "../../services/LoginService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/Action/userAction";
import { selectUser } from "../../redux/Reducer/userSlice";

const LoginPage = () => {
    const [purpose, setPurpose] = useState("login");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    //* Just for console.log
    console.log("User data:", user); // Log user data when it changes

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            navigate("/home");
        }
    }, [navigate]);

    //* Schema validation with Yup
    const validationSchema = Yup.object({
        username:
            purpose === "register"
                ? Yup.string()
                      .min(4, "Must be 4 characters or more!")
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

    const handleError = (error) => {
        let message = "An unexpected error occurred. Please try again.";

        if (error.code) {
            switch (error.code) {
                case "ERR_BAD_REQUEST":
                    message =
                        purpose == "login"
                            ? "Incorrect username or password."
                            : "Username may already be in use.";
                    break;
                case "ERR_NETWORK":
                    message =
                        "Service temporarily unavailable. Please try again later.";
                    break;
                default:
                    message =
                        "An unexpected error occurred with code: " + error.code;
                    break;
            }
        } else if (error.response) {
            switch (error.response.status) {
                case 401:
                    message = "Unauthorized. Please login again.";
                    break;
                case 404:
                    message = "Requested resource not found.";
                    break;
                case 500:
                    message = "Internal server error. Please try again later.";
                    break;
                default:
                    message = error.response.data.message || message;
                    break;
            }
        }

        return message;
    };

    const doLogin = async (credentials) => {
        try {
            const response = await LoginService.Login(credentials);

            if (response.data.accessToken) {
                localStorage.setItem(
                    "accessToken",
                    JSON.stringify(response.data.accessToken)
                );
                localStorage.setItem(
                    "refreshToken",
                    JSON.stringify(response.data.refreshToken)
                );

                dispatch(getUserInfo(credentials.username));
                navigate("/home");
            }
        } catch (error) {
            toast.error(handleError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const doRegister = async (credentials) => {
        try {
            const response = await LoginService.Register(credentials);
            const data = response.data;

            if (data) {
                setPurpose("login");
                toast.info("Registered successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    fontWeight: 600,
                });
            }
        } catch (error) {
            toast.error(handleError(error), {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                        if (purpose == "login") {
                            doLogin(values);
                        } else if (purpose == "register") {
                            doRegister(values);
                        }
                        setTimeout(() => {
                            actions.resetForm();
                            actions.setSubmitting(false);
                        }, 500);
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
                                <ToastContainer />
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

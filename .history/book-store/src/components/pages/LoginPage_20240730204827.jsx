import { useState } from "react";
import FormButton from "../elements/FormButton";
import FormInput from "../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import LoginService from "../../services/LoginService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
    const [purpose, setPurpose] = useState("login");
    const navigate = useNavigate();
    const notify = () =>
        toast("Wow so easy!", {
            style: { color: "#090937", fontWeight: 600 },
        });

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
            console.log("doLogin");
            const response = await LoginService.Login(credentials);
            const data = response.data;
            console.log(data);

            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/home");
                // if (response?.data?.user?.roles[0] == "Admin") {
                //     navigate("/admin");
                // } else if (response?.data?.user?.roles[0] == "Member") {
                //     navigate("/home/order");
                // }
            } else {
                // Nếu không có accessToken, giả định là có lỗi
                toast.error(data.message || "Unknown error occurred.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.log("Login failed with error:", error);
            // Sử dụng thông tin trong error.response.data nếu có sẵn
            const errorMessage =
                error.response &&
                error.response.data &&
                error.response.data.message
                    ? error.response.data.message
                    : "An unexpected error occurred. Please try again.";
            toast.error(errorMessage, {
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
                        doLogin(values);

                        setTimeout(() => {
                            console.log("Form submitted with values:", values);

                            // actions.resetForm();
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

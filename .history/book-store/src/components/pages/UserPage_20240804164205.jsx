import React from "react";
import { Formik, Form } from "formik";
import FormInput from "./../elements/FormInput";
import FormButton from "./../elements/FormButton";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/Reducer/userSlice";
import { updateUser } from "../../redux/Action/userAction";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

const UserPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser); // Correct usage of useSelector
    console.log(user);

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

    const doUpdate = (user) => {
        try {
            dispatch(updateUser(user));
            toast.info("User updated successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/user");
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

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Name must be at least 2 characters!")
            .max(50, "Name must be 50 characters or less!")
            .required("Name is required!"),
        email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
        username: Yup.string()
            .min(4, "Username must be at least 4 characters!")
            .max(20, "Username must be 20 characters or less!")
            .required("Username is required!"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters!")
            .max(20, "Password must be 20 characters or less!")
            .required("Password is required!"),
        phone: Yup.string()
            .matches(/^[0-9]+$/, "Phone number must be only digits")
            .min(10, "Phone number must be at least 10 digits!")
            .max(15, "Phone number must be 15 digits or less!")
            .required("Phone number is required!"),
        address: Yup.string()
            .min(10, "Address must be at least 10 characters!")
            .max(255, "Address must be 255 characters or less!")
            .required("Address is required!"),
    });

    return (
        <div className="flex w-full flex-center flex-col gap-[30px]">
            <h1 className="font-semibold text-3xl mb-4">User Details</h1>
            <Formik
                initialValues={{
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    password: "******",
                    phone: user.phone,
                    address: user.address,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    const updateData = { ...user, ...values };
                    console.log(updateData);
                    doUpdate(updateData);

                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="relative">
                        <div className="grid grid-cols-2 gap-x-[50px] gap-y-[30px]">
                            <FormInput
                                label="Name"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                            />
                            <FormInput
                                label="Email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <FormInput
                                label="Username"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                            />
                            <div className="pointer-events-none">
                                <FormInput
                                    label="Password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>
                            <FormInput
                                label="Phone"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                            />
                            <FormInput
                                label="Address"
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                            />
                        </div>

                        <div className="flex justify-end">
                            <FormButton
                                name="Save"
                                type="submit"
                                disabled={isSubmitting}
                            />
                            <ToastContainer />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserPage;

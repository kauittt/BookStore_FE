import React from "react";
import { Formik, Form } from "formik";
import FormInput from "./../elements/FormInput";
import FormButton from "./../elements/FormButton";
import * as Yup from "yup";

const UserPage = () => {
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
        <div className="flex w-full flex-center flex-col">
            <h1 className="font-semibold text-3xl mb-4">User Details</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    username: "",
                    password: "",
                    phone: "",
                    address: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        console.log("Form submitted with values:", values);
                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="relative">
                        <div className="grid grid-cols-2 gap-[50px] ">
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
                            <FormInput
                                label="Password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />
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

                        <div className="flex">
                            <FormButton
                                name="Save"
                                type="submit"
                                disabled={isSubmitting}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserPage;

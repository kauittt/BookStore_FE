import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const Checkout = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(4, "Must be 6 characters or more!")
            .max(15, "Must be 15 characters or less!")
            .required("Name is required!"),
        email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
        phone: Yup.string()
            .matches(/^[0-9]{9}$/, "Must be exactly 9 digits!")
            .required("Phone is required!"),
        address: Yup.string()
            .min(4, "Must be 6 characters or more!")
            .max(20, "Must be 20 characters or less!")
            .required("Address is required!"),
    });

    const initialValues = {
        name: "Minh",
        email: "",
        phone: "",
        address: "",
    };

    return (
        <div className="flex w-full h-screen">
            {/*//! Form */}
            <div className="w-1/2 flex flex-col items-center justify-evenly p-[20px]">
                {/*//* Greeting */}
                <div className="flex flex-col w-[400px]">
                    <h1 className="font-semibold text-3xl ">
                        {"Delivery Information"}
                    </h1>
                </div>

                {/*//* Form */}
                <Formik
                    initialValues={initialValues}
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

            {/*//! Image */}
            <div className="w-1/2">
                <img
                    src="./image/Login.png"
                    alt="Description"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

Checkout.propTypes = {
    book: PropTypes.object,
    updateTotalPrice: PropTypes.func,
    handleRemove: PropTypes.func,
};

export default Checkout;

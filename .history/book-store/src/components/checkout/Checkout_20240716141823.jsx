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
            .matches(/^[0-9]{10}$/, "Must be exactly 10 digits!")
            .required("Phone is required!"),
        address: Yup.string()
            .min(4, "Must be 6 characters or more!")
            .max(20, "Must be 20 characters or less!")
            .required("Address is required!"),
    });

    //! Get data from User
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
                        //! Save field data to user if null
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
                            <FormInput
                                label="Full name"
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
                                label="Phone number"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone"
                            />

                            <FormInput
                                label="Address"
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                            />

                            {/* Buttons */}
                            <div className="flex gap-[10px] justify-end">
                                <FormButton
                                    name={"Checkout"}
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
            <div className="w-1/2 border-l  border-border">
                <div className="">
                    <p className="">Books</p>
                </div>
                <div className="border-t  border-border">
                    <div className=""></div>
                </div>
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

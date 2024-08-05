import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
    const shippingFee = 2;
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
        <div className="flex w-full h-screen mt-[60px]">
            {/*//! Form */}
            <div className="w-1/2 flex flex-col items-center justify-start p-[20px]">
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

                            {/*//* Buttons */}
                            <div className="flex gap-[10px] justify-end py-[10px]">
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

            {/*//! Information */}
            <div
                className="w-1/2  flex flex-col items-center justify-start p-[20px]
            border-l  border-border"
            >
                {/* //* Books Wrapper */}
                <div
                    className="flex flex-col gap-[10px] 
                "
                >
                    <p className="font-semibold text-3xl">Books</p>

                    {/*//* Books */}
                    <div
                        className="flex flex-col gap-[10px]
                        max-h-[430px] overflow-auto"
                    >
                        {props.books?.map((book, index)) => <CheckoutItem key={index} book={book}></CheckoutItem>}
                    </div>
                </div>

                {/*//* Calculate money  */}
                <div
                    className="p-[20px]
                border-t  border-border"
                >
                    <div
                        className="flex flex-col gap-[20px] items-end
                        font-semibold"
                    >
                        {/*//* Shipping fee  */}
                        <p className="">
                            {"Shipping fee: "}
                            <span className="text-2xl text-text-color">
                                {shippingFee}$
                            </span>
                        </p>

                        {/*//* Total  */}
                        <p className="">
                            {"Total: "}
                            <span className="text-2xl text-text-color">
                                999$
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Checkout.propTypes = {
    books: PropTypes.array,
};

export default Checkout;

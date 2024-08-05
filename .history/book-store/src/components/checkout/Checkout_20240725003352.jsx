import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import CheckoutItem from "./CheckoutItem";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = (props) => {
    const notify = () =>
        toast("Wow so easy!", {
            style: { color: "#090937", fontWeight: 600 },
        });

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        props.books.forEach((book) => {
            total += book.price * book.quantity;
        });
        setTotalPrice(total.toFixed(2));
    }, [props.books]);

    const shippingFee = 2;
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(4, "Must be 6 characters or more!")
            .max(15, "Must be 15 characters or less!")
            .required("Name is required!"),
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
        <div className="flex max-w-full w-full  overflow-hidden">
            {/*//! Form */}
            <div
                className="flex flex-col items-center justify-start gap-[30px]
            w-1/2  "
            >
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

                        notify;
                        console.log("API HERE");
                        // Handle form submission
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-[15px] relative">
                            <FormInput
                                label="Full name"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            />

                            {/* <FormInput
                                label="E-mail"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            /> */}

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
                            <div className="flex gap-[10px] justify-end">
                                <FormButton
                                    name={"Checkout"}
                                    type="submit"
                                    disabled={isSubmitting}
                                    main={false}
                                />
                            </div>
                            <ToastContainer />
                        </Form>
                    )}
                </Formik>
            </div>

            {/*//! Information */}
            <div
                className="w-1/2  flex flex-col items-center justify-start 
            border-l  border-border"
            >
                {/* //* Books Wrapper */}
                <div
                    className="flex flex-col gap-[30px] 
                "
                >
                    <p className="font-semibold text-3xl">Books</p>

                    {/*//* Books */}
                    <div
                        className="flex flex-col gap-[20px] py-[10px]
                        max-h-[430px] overflow-auto"
                    >
                        {props.books?.map((book, index) => (
                            <CheckoutItem
                                key={index}
                                book={book}
                            ></CheckoutItem>
                        ))}
                    </div>
                </div>

                {/*//* Calculate money  */}
                <div
                    className="p-[20px]
                border-t  border-border"
                >
                    <div
                        className="flex  gap-[20px] items-end
                        font-semibold"
                    >
                        {/*//* Shipping fee  */}
                        {/* <p className="">
                            {"Shipping fee: "}
                            <span className="text-2xl text-text-color">
                                {shippingFee}$
                            </span>
                        </p> */}

                        {/*//* Total  */}
                        <p className="">
                            {"Total: "}
                            <span className="text-2xl text-text-color">
                                {totalPrice}$
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

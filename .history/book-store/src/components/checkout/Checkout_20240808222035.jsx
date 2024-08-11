import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";
import FormInput from "./../elements/FormInput";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import CheckoutItem from "./CheckoutItem";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/Reducer/userSlice";

const Checkout = (props) => {
    const user = useSelector(selectUser);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        props.books?.forEach((item) => {
            total += item.book.price * item.cartQuantity;
        });
        setTotalPrice(total.toFixed(2));
    }, [props.books]);

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

    const initialValues = {
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
    };

    return (
        <div className="flex max-w-full w-full  overflow-hidden">
            {/*//! Form */}
            <div
                className="flex flex-col items-center justify-start gap-[50px]
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
                        console.log("check out nè");

                        setTimeout(() => {
                            actions.setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col gap-[10px] relative">
                            <FormInput
                                label="Full name"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
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
                        {props.books?.map((item, index) => (
                            <CheckoutItem
                                key={index}
                                book={item.book}
                                quantity={item.cartQuantity}
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

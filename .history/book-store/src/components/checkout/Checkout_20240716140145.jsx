import PropTypes from "prop-types";

const Checkout = () => {
    return (
        <div className="flex w-full h-screen">
            {/*//! Form */}
            <div className="w-1/2 flex flex-col items-center justify-evenly p-[20px]">
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
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
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

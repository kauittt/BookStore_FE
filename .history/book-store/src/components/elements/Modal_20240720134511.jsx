import { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const Modal = ({ onClose, data, onSave }) => {
    const validationSchema = Yup.object({
        image: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
        author: Yup.string().required("Required"),
        price: Yup.number().required("Required").positive("Must be positive"),
        quantity: Yup.number()
            .required("Required")
            .positive("Must be positive"),
        category: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
    });

    // useEffect(() => {
    //     formik.setValues(data);
    // }, [data]);

    return (
        <div
            id="crud-modal"
            className="fixed inset-0 bg-[#000] bg-opacity-50 flex justify-center items-center z-50"
        >
            <div className="relative p-[20px] w-[900px] max-h-full">
                <div className="relative bg-bgr-main rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit Book
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={onClose}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <Formik
                        initialValues={data}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            onSave(values);
                            onClose();
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="p-4 md:p-5 grid grid-cols-2 gap-[20px]">
                                <FormInput
                                    label="Image URL"
                                    id="image"
                                    name="image"
                                    placeholder="Enter image URL"
                                />
                                <FormInput
                                    label="Name"
                                    id="name"
                                    name="name"
                                    placeholder="Type product name"
                                />
                                <FormInput
                                    label="Author"
                                    id="author"
                                    name="author"
                                    placeholder="Enter author's name"
                                />
                                <FormInput
                                    label="Price"
                                    id="price"
                                    name="price"
                                    placeholder="Enter price"
                                    type="number"
                                />
                                <FormInput
                                    label="Quantity"
                                    id="quantity"
                                    name="quantity"
                                    placeholder="Enter quantity"
                                    type="number"
                                />
                                <FormInput
                                    label="Category"
                                    id="category"
                                    name="category"
                                    as="select"
                                >
                                    <option value="">Select category</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </FormInput>
                                <FormInput
                                    label="Product Description"
                                    id="description"
                                    name="description"
                                    placeholder="Write product description here"
                                    as="textarea"
                                    rows="4"
                                />
                                <div className="flex gap-[10px] justify-end">
                                    <FormButton
                                        name="Save"
                                        type="submit"
                                        disabled={isSubmitting}
                                        // main={false}
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default Modal;

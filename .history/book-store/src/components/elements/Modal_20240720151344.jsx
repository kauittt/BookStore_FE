import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ onClose, data, onSave }) => {
    //! Xem các field name
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

    const initialValues = {
        image: data.image || "",
        name: data.name || "",
        author: data.author || "",
        price: data.price || "",
        quantity: data.quantity || "",
        category: data.category || "",
        description: data.description || "",
    };

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
                        <FontAwesomeIcon
                            className="text-2xl p-[10px] rounded cursor-pointer
                            text-bgr-color
                            transition-all duration-200 ease-in-out
                            hover:bg-bgr-color hover:text-text-white  "
                            icon={faXmark}
                            onClick={onClose}
                        />
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            console.log("Submit");
                            onSave(values);
                            onClose();
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="p-4 md:p-5 grid grid-cols-2 gap-[10px]">
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
                                <div className="flex gap-[10px] items-center justify-end">
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

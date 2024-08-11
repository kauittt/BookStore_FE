import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateBook } from "../../redux/Action/bookAction";

const Modal = ({ onClose, data, onSave, category, mapping, content }) => {
    const title = content === "book" ? "Edit Book" : "Edit Item";

    {
        // const validationSchema = Yup.object({
        //     field1: Yup.string().required("Required"),
        //     field2: Yup.string().required("Required"),
        //     field3: Yup.string().required("Required"),
        //     field4: Yup.number().required("Required").positive("Must be positive"),
        //     field5: Yup.number()
        //         .required("Required")
        //         .positive("Must be positive"),
        //     field6: Yup.string().required("Required"),
        //     description: Yup.string().required("Required"),
        // });
        // const initialValues = {
        //     image: data.image || "",
        //     name: data.name || "",
        //     author: data.author || "",
        //     price: data.price || "",
        //     quantity: data.quantity || "",
        //     category: data.category || "",
        //     description: data.description || "",
        // };
    }

    {
        /* <FormInput
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
                                /> */
    }
    const initialValues = {};

    if (content === "book") {
        Object.keys(data).forEach((field) => {
            // Skip field0
            // if (field === "field0") return;

            if (field === "field2" && data[field]) {
                // Split the field2 value by " - " to get title and author
                const [title, author] = data[field].split(" - ");

                // Assign title to field2 and author to field3
                initialValues["field2"] = title || "";
                initialValues["field3"] = author || "";
            } else {
                // Shift the remaining fields by one index
                const fieldIndex = parseInt(field.replace("field", ""), 10);
                if (fieldIndex > 2) {
                    const newFieldIndex = fieldIndex + 1;
                    initialValues[`field${newFieldIndex}`] = data[field];
                } else {
                    // Copy field1 as is
                    initialValues[field] = data[field];
                }
            }
        });

        // Ensure that any required new fields are initialized if necessary
        initialValues.field7 = initialValues.field7 || "";
    } else {
        // Handle the initialization for non-book content types
        Object.keys(data).forEach((field) => {
            // if ( field != "field0")
            initialValues[field] = data[field] || "";
        });
    }

    // Dynamically generate validation schema based on the mapping
    const validationSchema = Yup.object(
        Object.keys(mapping).reduce((schema, field) => {
            schema[field] = Yup.string().required("Required");
            return schema;
        }, {})
    );

    console.log(initialValues);
    console.log(validationSchema);

    return (
        <div
            id="crud-modal"
            className="fixed inset-0 bg-[#000] bg-opacity-50 flex justify-center items-center z-50"
        >
            <div className="relative p-[20px] w-[900px] max-h-full">
                <div className="relative bg-bgr-main rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
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
                            const result = Object.keys(values).reduce(
                                (acc, key) => {
                                    const fieldName = mapping[key]; // Get the field name from the mapping
                                    acc[fieldName] = values[key]; // Assign the value from updatedData to the new field name
                                    return acc;
                                },
                                {}
                            );
                            console.log(result);

                            updateBook(result.id, result);

                            // onSave(values);
                            onClose();
                            actions.setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="p-4 md:p-5 grid grid-cols-2 gap-[10px]">
                                {Object.keys(initialValues).map(
                                    (field, index) => (
                                        <FormInput
                                            key={index}
                                            label={
                                                mapping[field]?.toUpperCase() ||
                                                field.toUpperCase()
                                            }
                                            id={field}
                                            name={field}
                                            placeholder={`Enter ${
                                                mapping[field] || field
                                            }`}
                                            type={
                                                field.includes("price") ||
                                                field.includes("quantity")
                                                    ? "number"
                                                    : "text"
                                            }
                                            as={
                                                field.includes("description")
                                                    ? "textarea"
                                                    : "input"
                                            }
                                            rows={
                                                field.includes("description")
                                                    ? 4
                                                    : 1
                                            }
                                        />
                                    )
                                )}

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
    category: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    mapping: PropTypes.object,
    content: PropTypes.string,
};

export default Modal;

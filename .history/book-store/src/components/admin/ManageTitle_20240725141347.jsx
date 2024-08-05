import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";
import { useState } from "react";
import Modal from "../elements/Modal";

const ManageTitle = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});

    const handleEditClick = () => {
        setCurrentData({});
        setShowModal(true);
    };
    const handleSave = (updatedData) => {
        console.log("Updated data:", updatedData);
        // Add logic to update the data in the parent component or backend
    };
    return (
        <div
            className="flex justify-between items-center 
        h-[80px] bg-bgr-main p-[20px]
            rounded shadow-custom"
        >
            <p className="font-semibold text-lg">{props.name}</p>
            <FormButton
                name={props.button}
                onClick={handleEditClick}
            ></FormButton>
            {showModal && (
                <Modal
                    onClose={() => setShowModal(false)}
                    data={currentData}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

ManageTitle.propTypes = {
    name: PropTypes.string,
    button: PropTypes.string,
};

export default ManageTitle;

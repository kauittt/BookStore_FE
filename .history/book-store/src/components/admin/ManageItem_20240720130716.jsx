import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../elements/Modal";

const ManageItem = (props) => {
    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address

    const isImage = props.data.image ? true : false;

    //* Handle model
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});

    const handleEditClick = () => {
        setCurrentData(props.data);
        setShowModal(true);
    };

    const handleSave = (updatedData) => {
        console.log("Updated data:", updatedData);
        // Add logic to update the data in the parent component or backend
    };

    return (
        <div
            className="flex justify-between  items-center
                gap-[15px] min-h-[80px] h-[80px] relative
                border-b border-border"
        >
            <p
                className={`${props.category[0].style} font-semibold text-text-color`}
            >
                {props.index + 1}
            </p>

            {isImage ? (
                <div
                    className={`${props.category[1].style} h-full 
                flex items-center justify-center`}
                >
                    <img
                        className="w-[60px] h-full object-cover"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className={`${props.category[1].style} `}>Tăng Khải Minh</p>
            )}

            <p className={`${props.category[2].style} `}>
                {props.data.name + " - " + props.data.author}
            </p>

            <p className={`${props.category[3].style} `}>Danh mục</p>

            <p className={`${props.category[4].style} `}>
                {props.data.quantity}
            </p>

            <p className={`${props.category[5].style} `}>{props.data.price}$</p>

            <p className={`${props.category[6].style} `}>
                {props.data.description}
            </p>

            <FontAwesomeIcon
                className="absolute right-[-38px] p-[10px] rounded cursor-pointer
                text-bgr-color
                transition-all duration-200 ease-in-out
                hover:bg-bgr-color hover:text-text-white  "
                icon={faPen}
                onClick={handleEditClick}
            />

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                data={currentData}
                onSave={handleSave}
            />
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    category: PropTypes.array,
    index: PropTypes.number,
};
export default ManageItem;

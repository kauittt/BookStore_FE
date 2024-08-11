import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../elements/Modal";

const ManageItem = ({ data, category, isImage, ...props }) => {
    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address

    //! Handle Edit
    //! Căn chỉnh khi đổi ở AdminPage (khi chọn nav bên trái)
    console.log(isImage);
    console.log(data);
    console.log(category);

    //* Handle model
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});

    const handleEditClick = () => {
        setCurrentData(data);
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
            <p className={`${category[0].style} font-semibold text-text-color`}>
                {props.index + 1}
            </p>

            {isImage ? (
                <div
                    className={`${category[1].style} h-full 
                flex items-center justify-center`}
                >
                    <img
                        className="w-[60px] h-full object-cover"
                        src={data.field1}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className={`${category[1].style} `}>{data.field1}</p>
            )}

            <p className={`${category[2].style} `}>{data.field2}</p>

            <p className={`${category[3].style} `}>{data.field3}</p>

            <p className={`${category[4].style} `}>{data.field4}</p>

            <p className={`${category[5].style} `}>{data.field5}$</p>

            <p className={`${category[6].style} `}>{data.field6}</p>

            <FontAwesomeIcon
                className="absolute right-[-38px] p-[10px] rounded cursor-pointer
                text-bgr-color
                transition-all duration-200 ease-in-out
                hover:bg-bgr-color hover:text-text-white  "
                icon={faPen}
                onClick={handleEditClick}
            />

            {showModal && (
                <Modal
                    category={category}
                    onClose={() => setShowModal(false)}
                    data={currentData}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    category: PropTypes.array,
    index: PropTypes.number,
    isImage: PropTypes.bool,
};
export default ManageItem;

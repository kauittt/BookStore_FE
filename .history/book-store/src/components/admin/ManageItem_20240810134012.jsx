import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faCaretDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../elements/Modal";
import { useDispatch } from "react-redux";
import { removeBook, updateBook } from "../../redux/Action/bookAction";

const ManageItem = ({
    data,
    category,
    isImage,
    mapping,
    content,
    ...props
}) => {
    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address

    console.log("ManageItem-----");
    console.log(data);
    console.log(category);
    console.log(mapping);

    //* Handle model
    const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const dispatch = useDispatch();

    const handleEditClick = () => {
        setCurrentData(data);
        setShowModal(true);
    };

    const handleUpdate = (updateData) => {
        if (content == "book") {
            console.log("Updadte data");
            console.log(updateData);
            dispatch(updateBook(updateData.id, updateData));
        } else {
        }
    };

    const handleDelete = () => {
        console.log("Delete");
        dispatch(removeBook(data.field0));
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

            {/* //* Button */}
            <div className="relative group">
                {/* faCaretDown is always visible */}
                <FontAwesomeIcon
                    className="p-[10px] text-text-color cursor-pointer"
                    icon={faCaretDown}
                />

                {/* Hidden div containing faPen and faTrash icons */}
                <div
                    className="flex gap-[5px]
                    absolute right-[0px] top-[30px]
                    rounded cursor-pointer  
                    transition-base
                    opacity-0  group-hover:opacity-100"
                >
                    <FontAwesomeIcon
                        className="hover-sub transition-base
                        p-[6px]"
                        icon={faPen}
                        onClick={handleEditClick}
                    />
                    <FontAwesomeIcon
                        className="hover-sub transition-base
                        p-[6px]"
                        icon={faTrash}
                        onClick={handleDelete}
                    />
                </div>
            </div>

            {showModal && data && (
                <Modal
                    category={category}
                    onClose={() => setShowModal(false)}
                    data={currentData}
                    handleUpdate={handleUpdate}
                    mapping={mapping}
                    content={props.content}
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
    content: PropTypes.string,
    mapping: PropTypes.object,
};
export default ManageItem;

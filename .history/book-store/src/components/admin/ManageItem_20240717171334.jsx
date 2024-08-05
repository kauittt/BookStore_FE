import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";
const ManageItem = (props) => {
    // STT | Tên khách | Tên sách | Số lượng | Giá     | Phone | Address
    // STT | Hình      | Tên sách | Danh mục | Tồn kho | Giá   | Mô tả
    // STT | Username  | Name     | Role     | Email   | Phone | Address

    const isImage = props.data.image ? true : false;

    return (
        <div
            className="flex justify-center  items-center
    gap-[10px] h-[80px] p-[10px]    "
        >
            {!isImage ? (
                <p>sas</p>
            ) : (
                <div className="w-[60px] h-full ">
                    <img
                        className="w-full h-full object-cover"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            )}
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    category: PropTypes.array,
    index: PropTypes.string,
};
export default ManageItem;

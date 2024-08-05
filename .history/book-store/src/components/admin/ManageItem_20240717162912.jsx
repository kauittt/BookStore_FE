import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";
const ManageItem = (props) => {
    // STT | Tên khách | Tên sp | Số lượng | Giá | Số điện thoại | Địa chỉ
    // STT | Hình | Tên sách | Danh mục | Tồn kho | Giá | Mô tả
    // STT | Username  | Role | Name | Email | Phone |  Address
    const isImage = props.data.image ? true : false;

    return (
        <div
            className="flex justify-between  items-start
            h-[80px]"
        >
            <p className="w-[50px]">{props.index}</p>
            {isImage ? (
                <div className="w-[60px] h-full ">
                    <img
                        className="w-full h-full object-cover"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className="w-[150px]">Tăng Khải Minh</p>
            )}
            <p className="w-[100px]">Danh mục</p>
            <p className="w-[200px]">{props.data.name}</p>
            <p className="w-[50px]">{props.data.quantity}</p>
            <p className="w-[100px]">{props.data.price}$</p>
            <p className="flex-1">{props.data.description}</p>
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    index: PropTypes.string,
};
export default ManageItem;

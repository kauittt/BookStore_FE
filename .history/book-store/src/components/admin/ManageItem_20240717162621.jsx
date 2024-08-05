import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";
const ManageItem = (props) => {
    // STT | Tên khách | Tên sp | Số lượng | Giá | Địa chỉ | Số điện thoại
    // STT | Hình | Tên sách | Danh mục | Tồn kho | Giá | Mô tả
    // STT | Role | Username | Name | Email | Address | Phone
    const isImage = props.data.a ? true : false;

    return (
        <div
            className="flex justify-between  items-start
            h-[80px]"
        >
            <p className="w-[50px]">{props.index}</p>
            {isImage ? (
                <div className="w-[100px] h-full ">
                    <img
                        className="w-[100px] h-full object-cover"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className="w-[150px]">Tăng Khải Minh</p>
            )}
            <p className="w-[100px]">Danh mục</p>
            <p className="">{props.data.name}</p>
            <p className="">{props.data.quantity}</p>
            <p className="">{props.data.price}$</p>
            <p className="">{props.data.description}</p>
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    index: PropTypes.string,
};
export default ManageItem;

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
    const isImage = props.data.image ? true : false;

    return (
        <div className="flex h-[80px] justify-between">
            <p className="">{props.index}</p>
            {isImage ? (
                <div className="">
                    <img
                        className="w-full h-full"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className=""></p>
            )}
            <p className="">Danh mục</p>
            <p className="">{props.data.name</p>
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

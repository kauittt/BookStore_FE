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
        <div>
            <p>{props.index}</p>
            {isImage ? (
                <div>
                    <img src="" alt="" />
                </div>
            ) : (
                <p></p>
            )}
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    index: PropTypes.string,
};
export default ManageItem;

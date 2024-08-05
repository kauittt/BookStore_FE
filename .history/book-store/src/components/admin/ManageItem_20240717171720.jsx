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
    console.log(props.data);
    console.log(props.category);

    return (
        <div
            className="flex justify-between  items-center
    gap-[10px] h-[80px] p-[10px]    "
        >
            {props.category.map((field, index) => {
                const style = { width: field.width };

                return !isImage ? (
                    <p style={style}>{props.data[index]}</p>
                ) : (
                    <div className="h-full " style={style}>
                        <img
                            className="w-full h-full object-cover"
                            src={props.data.image}
                            alt="Image"
                        />
                    </div>
                );
            })}
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    category: PropTypes.array,
    index: PropTypes.string,
};
export default ManageItem;

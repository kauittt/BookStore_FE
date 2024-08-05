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
            <p className={`w-[${props.category[0].width}]`}>{props.index}</p>

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

            <p className="w-[150px]">tangkhiaminh@gmail.com</p>

            <p className="w-[100px]">{props.data.price}$</p>

            <p className="flex-1">{props.data.description}</p>
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    category: PropTypes.array,
    index: PropTypes.string,
};
export default ManageItem;

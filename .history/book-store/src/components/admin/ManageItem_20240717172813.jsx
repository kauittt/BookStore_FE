import PropTypes from "prop-types";

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
                <div className={`w-[${props.category[1].width}] h-full`}>
                    <img
                        className="w-full h-full object-cover"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className={`w-[${props.category[1].width}]`}>
                    Tăng Khải Minh
                </p>
            )}

            <p className={`w-[${props.category[2].width}]`}>Danh mục</p>

            <p className={`w-[${props.category[3].width}]`}>
                {props.data.name}
            </p>

            <p className={`w-[${props.category[4].width}]`}>
                {props.data.quantity}
            </p>

            <p className={`w-[${props.category[5].width}]`}>
                {props.data.price}$
            </p>

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

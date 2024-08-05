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
                gap-[10px] h-[80px] "
        >
            <p className={`${props.category[0].style} `}>{props.index}</p>

            {isImage ? (
                <div
                    className={`${props.category[1].style} h-full 
                flex items-center justify-center`}
                >
                    <img
                        className="w-[60px] h-full object-cover"
                        src={props.data.image}
                        alt="Image"
                    />
                </div>
            ) : (
                <p className={`${props.category[1].style} `}>Tăng Khải Minh</p>
            )}

            <p className={`${props.category[2].style} `}>
                {props.data.name + " - " + props.data.author}
            </p>

            <p className={`${props.category[3].style} `}>Danh mục</p>

            <p className={`${props.category[4].style} `}>
                {props.data.quantity}
            </p>

            <p className={`${props.category[5].style} `}>{props.data.price}$</p>

            <p className={`${props.category[6].style} `}>
                {props.data.description}
            </p>
        </div>
    );
};
ManageItem.propTypes = {
    data: PropTypes.object,
    category: PropTypes.array,
    index: PropTypes.string,
};
export default ManageItem;

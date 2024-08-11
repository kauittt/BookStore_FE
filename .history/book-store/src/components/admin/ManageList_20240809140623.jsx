import PropTypes from "prop-types";
import ManageItem from "./ManageItem";
const ManageList = ({ data, content }) => {
    //! Khi có data xem lại: name, width
    const category = {
        order: [
            { name: "Serial", width: "50px" },
            { name: "Customer Name", width: "150px" },
            { name: "Book Title", width: "150px" },
            { name: "Quantity", width: "100px" },
            { name: "Price", width: "100px" },
            { name: "Phone Number", width: "100px" },
            { name: "Address", flex: "1" }, // Use flex for flexible widths
        ],
        book: [
            { name: "Serial", style: "w-[60px] text-center" },
            { name: "Image", style: "w-[80px] text-center" },
            { name: "Book Title", style: "w-[250px] text-center" },
            { name: "Category", style: "w-[100px] text-center" },
            { name: "Stock", style: "w-[60px] text-center" },
            { name: "Price", style: "w-[60px] text-center" },
            { name: "Description", style: "flex-1 text-center" },
        ],
        user: [
            { name: "Serial", width: "50px" },
            { name: "Username", width: "150px" },
            { name: "Name", width: "200px" },
            { name: "Role", width: "100px" },
            { name: "Email", width: "200px" },
            { name: "Phone Number", width: "150px" },
            { name: "Address", flex: "1" },
        ],
    };

    return (
        //* Danh sách sản phẩm
        <div
            className="max-w-[1200px] w-[1200px] p-[20px] pr-[40px]
        flex flex-col gap-[15px] bg-bgr-main shadow-custom rounded
        overflow-y-auto"
        >
            {/*//* Category */}
            <div
                className="flex justify-between items-center gap-[15px]
            font-semibold text-lg"
            >
                {category[content]?.map((field, index) => (
                    <p key={index} className={`${field.style} `}>
                        {field.name}
                    </p>
                ))}
            </div>

            {/*//* List Item */}
            <div className="flex flex-col max-h-full ">
                {data?.map((book, index) => (
                    <ManageItem
                        data={book}
                        category={category[content]}
                        key={index}
                        index={index}
                    ></ManageItem>
                ))}
            </div>
        </div>
    );
};
ManageList.propTypes = {
    data: PropTypes.array,
    content: PropTypes.string,
};
export default ManageList;

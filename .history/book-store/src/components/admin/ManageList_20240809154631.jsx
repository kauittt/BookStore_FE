import PropTypes from "prop-types";
import ManageItem from "./ManageItem";
const ManageList = ({ data, content }) => {
    //! Khi có data xem lại: name, width
    const category = {
        order: [
            { name: "Serial", style: "w-[50px] text-center", field: null },
            { name: "Customer Name", style: "w-[150px] text-center" },
            { name: "Book Title", style: "w-[150px] text-center" },
            { name: "Quantity", style: "w-[100px] text-center" },
            { name: "Price", style: "w-[100px] text-center" },
            { name: "Phone Number", style: "w-[100px] text-center" },
            { name: "Address", style: "flex-1 text-center" }, // Use flex for flexible widths
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
            { name: "Serial", style: "w-[50px] text-center" },
            { name: "Username", style: "w-[150px] text-center" },
            { name: "Name", style: "w-[200px] text-center" },
            { name: "Role", style: "w-[100px] text-center" },
            { name: "Email", style: "w-[200px] text-center" },
            { name: "Phone Number", style: "w-[150px] text-center" },
            { name: "Address", style: "flex-1 text-center" },
        ],
    };

    console.log("Data to map ---------------");
    console.log(data);

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
                {category[content]?.map((item, index) => (
                    <p key={index} className={`${item.style} `}>
                        {item.name}
                    </p>
                ))}
            </div>

            {/*//* List Item */}
            <div className="flex flex-col max-h-full ">
                {data?.map((item, index) => (
                    <ManageItem
                        data={item}
                        category={category[content]}
                        isImage={content == "book" ? true : false}
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

import PropTypes from "prop-types";

const BookItem = (props) => {
    // m-w-[180px] w-[180px] h-[260px] m-h-[260px]
    // m-w-[160px] w-[160px] h-[175px] m-h-[175px]
    return (
        <div
            className="w-[200px] h-[300px] overflow-hidden bg-bgr-main bg-[#00aefd] rounded
                        p-[15px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                        flex flex-col justify-between"
        >
            <div className="w-[100%] h-[200px] rounded  ">
                <img
                    className="w-full h-full object-cover rounded shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
                    src={props.image}
                    alt="Image"
                />
            </div>
            <div className="flex justify-between items-center mt-[20px] gap-[10px]">
                <div className="">
                    <p className="font-semibold">{props.name}</p>
                    <p className="text-sm  text-text-light ">{props.author}</p>
                </div>
                <p className="text-lag font-semibold text-text-color  ">{`${props.price}$`}</p>
            </div>
        </div>
    );
};
BookItem.propTypes = {
    image: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
};

export default BookItem;

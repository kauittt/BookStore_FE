import PropTypes from "prop-types";

const BookItem = (props) => {
    // m-w-[180px] w-[180px] h-[260px] m-h-[260px]
    // m-w-[160px] w-[160px] h-[175px] m-h-[175px]
    return (
        <div
            className="m-w-[300px] w-[300px] h-[400px] m-h-[400px]  overflow-hidden bg-bgr-main  rounded
                        p-[20px] 
                        shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                        flex flex-col justify-between cursor-pointer"
        >
            <div className="flex items-center justify-center w-[100%] min-h-[280px] max-h-[280px] rounded  ">
                <img
                    className="w-[200px] h-full object-cover rounded 
                    shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
                    src={props.image}
                    alt="Image"
                />
            </div>
            <div className="flex justify-between items-center mt-[20px] gap-[10px]">
                <div className="flex flex-col gap-[5px] flex-grow-7 max-w-[250px]">
                    <p className="text-lg font-semibold truncate  overflow-hidden text-overflow-ellipsis white-space-nowrap ">
                        {props.name}
                    </p>
                    <p className="text-base  text-text-light truncate  overflow-hidden text-overflow-ellipsis white-space-nowrap">
                        {props.author}
                    </p>
                </div>
                <p className="text-lg font-semibold text-text-color flex-grow-3 max-w-[55px] min-w-[55px]">{`${props.price}$`}</p>
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

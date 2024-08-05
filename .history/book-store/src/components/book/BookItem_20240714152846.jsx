import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const BookItem = (props) => {
    return (
        <div
            className="group m-w-[300px] w-[300px] h-[400px] m-h-[400px] bg-bgr-main  rounded p-[20px]
                        overflow-hidden
                        shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                        flex flex-col justify-between cursor-pointer gap-[20px]
                        relative"
        >
            <div
                className="flex items-center justify-center 
                        w-[100%] min-h-[280px] max-h-[280px] rounded 
                        relative overflow-hidden
                       "
            >
                {/*//* Image */}
                <img
                    className="w-[200px] h-full object-cover rounded 
                    shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                    transition-all duration-300 ease-in-out 
                    overflow-hidden
                    group-hover:scale-110 "
                    src={props.image}
                    alt="Image"
                />
                {/*//* Layer  */}
                <div
                    className="absolute inset-0 bg-text-normal bg-opacity-25 opacity-0 
                    w-[200px] h-full left-[50%] -translate-x-[50%]
                    transition-opacity duration-300 ease-in-out flex justify-center items-center 
                    group-hover:opacity-80 group-hover:scale-110"
                >
                    <span className="text-text-white text-3xl mx-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <span className="text-text-white text-3xl mx-2">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center gap-[10px]">
                <div className="flex flex-col gap-[5px] max-w-[200px]">
                    <p className="text-lg font-semibold truncate  overflow-hidden text-overflow-ellipsis white-space-nowrap ">
                        {props.name}
                    </p>
                    <p className="text-text-light truncate overflow-hidden text-overflow-ellipsis white-space-nowrap">
                        {props.author}
                    </p>
                </div>
                <p className="text-lg font-semibold text-text-color ">{`${props.price}$`}</p>
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

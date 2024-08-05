import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedBook } from "../../redux/Reducer/bookSlice";

const BookItem = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const path = "/books/detail/" + props.id;

    const handleDetail = (e) => {
        console.log("Handle Detail -> BookDetail");
        e.stopPropagation();
        dispatch(
            setSelectedBook({
                id: props.id,
                name: props.name,
                author: props.author,
                image: props.image,
                price: props.price,
                description: props.description,
            })
        );
        navigate(path);
    };
    //* 67
    return (
        <div
            onClick={handleDetail}
            className="group m-w-[300px] w-[300px] h-[400px] m-h-[400px] bg-bgr-main  rounded p-[20px]
                        overflow-hidden
                        shadow-custom
                        flex flex-col justify-between cursor-pointer gap-[20px]
                        relative"
        >
            {/*//* Image wrapper  */}
            <div
                className="flex items-center justify-center 
                        max-w-[100%] w-[100%] min-h-[270px] max-h-[270px] rounded 
                        relative overflow-hidden  
                       "
            >
                {/*//* Image */}
                <div className="max-w-[200px] w-[200px] max-h-full h-full overflow-hidden">
                    <img
                        className="w-full h-full object-cover rounded 
                    shadow-custom
                    transition-base
                    overflow-hidden
                    group-hover:scale-110 "
                        src={props.image}
                        alt="Image"
                    />
                </div>
                {/*//* Layer  */}
                <div className="max-w-[200px] w-[200px] max-h-full h-full overflow-hidden absolute">
                    <div
                        className="absolute inset-0 bg-text-normal bg-opacity-25 opacity-0 
                    w-[200px] h-full left-[50%] -translate-x-[50%]
                    transition-opacity duration-200 ease-in-out flex justify-center items-center 
                    group-hover:opacity-90 "
                    >
                        <span
                            className="text-text-white text-2xl mx-2 p-[10px]  rounded
                        hover:bg-text-color transition-opacity duration-200 ease-in-out
                        shadow-custom"
                            onClick={handleDetail}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <span
                            className="text-text-white text-2xl mx-2 rounded p-[10px]
                        hover:bg-text-color transition-opacity duration-200 ease-in-out
                        shadow-custom"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate("/cart");
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                //! Tạm thời là navigate("/cart"), cần handle để add item to cart
                            />
                        </span>
                    </div>
                </div>
            </div>

            {/*//* Info */}
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
    id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    desc: PropTypes.string,
};

export default BookItem;

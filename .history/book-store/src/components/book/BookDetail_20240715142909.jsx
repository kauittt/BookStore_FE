import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BookDetail = (props) => {
    const book = props.book;
    return (
        <div className="flex gap-[20px]">
            {/*//* Image */}
            <div className="w-[470px] h-[470px]">
                <img
                    className="w-full h-full object-cover"
                    src={book.image}
                    alt="Image"
                />
            </div>

            {/*//* Info  */}
            <div className="flex flex-col gap-[60px]">
                {/*//* Title */}
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h3 className="">{book.name}</h3>
                        <p className="">{book.author}</p>
                    </div>
                    <FontAwesomeIcon className="" icon={faCartShopping} />
                </div>

                {/*//* Description  */}
                <div className="">
                    <p className="">Summary</p>
                    <p className="">{book.description}</p>
                </div>
            </div>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.object,
};

export default BookDetail;

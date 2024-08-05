import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BookDetail = (props) => {
    const book = props.book;
    return (
        <div>
            {/*//* Image */}
            <div className="">
                <img className="" src={book.image} alt="Image" />
            </div>

            {/*//* Info  */}
            <div className="">
                {/*//* Title */}
                <div className="">
                    <div className="">
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

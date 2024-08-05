import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BookDetail = (props) => {
    const book = props.book;
    return (
        <div>
            {/*//* Image */}
            <div>
                <img src={book.image} alt="Image" />
            </div>

            {/*//* Info  */}
            <div>
                {/*//* Title */}
                <div>
                    <div>
                        <h3>{book.name}</h3>
                        <p>{book.author}</p>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>

                {/*//* Description  */}
                <div>
                    <p>Summary</p>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.object,
};

export default BookDetail;

import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BookList = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.books?.map((book, index) => {
                return (
                    <BookItem
                        key={index}
                        image={book.image}
                        price={book.price}
                        name={book.name}
                        author={book.atuhor}
                    ></BookItem>
                );
            })}
        </div>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    title: PropTypes.string,
};

export default BookList;

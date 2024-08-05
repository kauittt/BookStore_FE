import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BookList = (props) => {
    return (
        <div className="flex flex-col gap-[20px]">
            <h2 className="font-semibold text-3xl">{props.title}</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[20px]">
                {props.books?.map((book, index) => {
                    return (
                        <BookItem
                            key={index}
                            image={book.image}
                            price={book.price}
                            name={book.name}
                            author={book.author}
                        ></BookItem>
                    );
                })}
            </div>
        </div>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    title: PropTypes.string,
};

export default BookList;

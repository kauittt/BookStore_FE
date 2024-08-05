import PropTypes from "prop-types";
import BookItem from "./BookItem";

const BookList = (props) => {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    return (
        <div className="flex flex-col gap-[20px]">
            <h2 className="font-semibold text-3xl">{props.title}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
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

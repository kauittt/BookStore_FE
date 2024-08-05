import PropTypes from "prop-types";
import BookItem from "./BookItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { , faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const BookList = ({ full = true, ...props }) => {
    return (
        <div
            className="flex flex-col gap-[20px] mt-[100px] 
                    "
        >
            {/*//* Title  */}
            <div className="flex justify-between">
                <h2 className="font-semibold text-3xl">
                    <FontAwesomeIcon icon={faAngleLeft} />

                    {props.title}
                </h2>
                {!full && (
                    <p
                        className="font-semibold cursor-pointer 
                    transition-all duration-150 ease-in-out
                    text-bgr-color hover:text-bgr-color-hover "
                    >
                        View All
                    </p>
                )}
            </div>

            {/*//* Books  */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]
                        justify-items-center items-center "
            >
                {props.books
                    ?.slice(0, full ? props.books.length : 4)
                    .map((book, index) => {
                        return (
                            <BookItem
                                key={index}
                                image={book.image}
                                price={book.price}
                                name={book.name}
                                author={book.author}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    title: PropTypes.string,
    full: PropTypes.bool,
};

export default BookList;

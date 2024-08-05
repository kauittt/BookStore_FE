import PropTypes from "prop-types";
import BookItem from "./BookItem";
import { Link, useNavigate } from "react-router-dom";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookList = ({ full = true, ...props }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-[20px] mt-[100px]">
            {/*//* Title  */}
            <div className="flex justify-between">
                <div className="flex gap-[10px] items-center">
                    {full && (
                        <FontAwesomeIcon
                            className="text-2xl"
                            icon={faAngleLeft}
                        ></FontAwesomeIcon>
                    )}
                    <h2 className="font-semibold text-3xl">{props.title}</h2>
                </div>
                {!full && (
                    <p
                        onClick={() => navigate("/books")}
                        className="font-semibold cursor-pointer 
                    transition-all duration-200 ease-in-out
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

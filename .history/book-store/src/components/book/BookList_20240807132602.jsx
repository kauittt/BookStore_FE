import PropTypes from "prop-types";
import BookItem from "./BookItem";
import { useNavigate } from "react-router-dom";
import BackNavigation from "../elements/BackNavigation";
import { setViewAllBooks } from "../../redux/Reducer/bookSlice";
import { useDispatch } from "react-redux";

const BookList = ({ full = true, ...props }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleViewAll = () => {
        dispatch(setViewAllBooks(props.books));
        navigate(`/books/${props.title}`);
    };

    return (
        <div className="flex flex-col gap-[20px] ">
            {/*//* Title  */}
            <div className="flex justify-between">
                {full ? (
                    <BackNavigation title={props.title}></BackNavigation>
                ) : (
                    <h2 className="font-semibold text-3xl">{props.title}</h2>
                )}

                {!full && (
                    <p
                        onClick={handleViewAll}
                        className="font-semibold cursor-pointer 
                    transition-base
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
                                price={book.price + ""}
                                name={book.name}
                                author={book.author}
                                description={book.description}
                                id={book.id + ""}
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

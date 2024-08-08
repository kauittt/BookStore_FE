import { useParams } from "react-router-dom";
import BookList from "../book/BookList";
import { useSelector } from "react-redux";
import { selectViewAll } from "./../../redux/Reducer/bookSlice";

const BookPage = () => {
    console.log("Book Page");

    const { category } = useParams();
    const books = useSelector(selectViewAll);

    return (
        <div className="container mx-auto pb-[50px]">
            <BookList books={books} title={category}></BookList>
        </div>
    );
};

export default BookPage;

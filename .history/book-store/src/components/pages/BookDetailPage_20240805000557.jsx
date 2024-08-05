import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/FormButton";
import BackNavigation from "../elements/BackNavigation";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedBook } from "../../redux/Reducer/bookSlice";

const BookDetailPage = (props) => {
    //! Xem qua cái này
    // const handleBookClick = (book) => {
    //     dispatch(selectBook(book));
    //     navigate(`/book/${book.id}`);
    // };

    // const { id } = useParams();
    // const book = useSelector((state) =>
    //     state.books.list.find((book) => book.id === parseInt(id))
    // );

    // const book = props.book
    //     ? props.book
    //     : {
    //           image: "https://nhasachphuongnam.com/images/thumbnails/240/290/detailed/287/con-duong-hoi-giao-tb-2024.jpg",
    //           price: "5.9",
    //           name: "Dune",
    //           author: "Frank Herbert ",
    //           quantity: 10,
    //           description:
    //               "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections",
    //       };

    console.log("Book Detail Page");
    const book = useSelector(selectSelectedBook);
    console.log("book detail");
    console.log(book);

    return (
        <div className="flex flex-col gap-[30px] container mx-auto">
            {/*//* Direction */}
            <BackNavigation title={"Book Details"}></BackNavigation>

            {/*//* Content  */}
            <div className="flex gap-[50px] ">
                {/*//* Image */}
                <div
                    className="flex flex-center bg-bgr-main 
                    shadow-custom rounded
                min-w-[350px] max-w-[350px] h-[470px]"
                >
                    <div className="w-[235px] h-[315px] rounded">
                        <img
                            className="w-full h-full object-cover shadow-custom rounded"
                            src={book.image}
                            alt="Image"
                        />
                    </div>
                </div>

                {/*//* Info  */}
                <div className="flex flex-col gap-[30px] justify-between">
                    <div className="flex justify-between items-center">
                        {/*//* Title */}
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="font-semibold text-3xl">
                                {book.name}
                            </h3>
                            <p className="font-semibold text-text-light text-lg">
                                {book.author}
                            </p>
                        </div>

                        {/*//* Cart  */}
                        <FontAwesomeIcon
                            className="p-[15px] rounded-[50%] text-xl cursor-pointer shadow-custom
                                transition-base
                            bg-bgr-main hover-main"
                            icon={faCartShopping}
                            onClick={() => navigate("/cart")}
                        />
                    </div>

                    {/*//* Price */}
                    <div className="font-semibold text-3xl border-t border-b border-border py-4">
                        <p
                            className=" text-text-color
                    inline-block"
                        >
                            {book.price}$
                        </p>
                    </div>

                    {/*//* Description  */}
                    <div className="flex flex-col gap-[10px]">
                        <p className="font-semibold text-lg">Summary</p>
                        <p className="text-text-light">{book.description}</p>
                    </div>

                    {/*//* Button  */}
                    <div className="flex justify-end">
                        <FormButton
                            main={false}
                            name="Buy now"
                            onClick={() => navigate("/checkout")}
                        ></FormButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetailPage.propTypes = {
    book: PropTypes.object,
};

export default BookDetailPage;

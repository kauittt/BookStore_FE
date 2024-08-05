import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/FormButton";

const BookDetail = (props) => {
    const book = props.book;
    return (
        <div className="flex flex-col gap-[30px]">
            {/*//* Direction */}
            <h2 className="font-semibold text-lg">
                <FontAwesomeIcon className="mr-[10px]" icon={faAngleLeft} />
                Book Details
            </h2>

            {/*//* Content  */}
            <div className="flex gap-[50px] ">
                {/*//* Image */}
                <div
                    className="flex justify-center items-center bg-bgr-main 
                    shadow-custom
                min-w-[350px] max-w-[350px] h-[470px]"
                >
                    <div className="w-[230px] h-[315px]">
                        <img
                            className="w-full h-full object-cover"
                            src={book.image}
                            alt="Image"
                        />
                    </div>
                </div>

                {/*//* Info  */}
                <div className="flex flex-col gap-[30px] justify-between">
                    {/*//* Title */}
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-[10px]">
                            <h3 className="font-semibold text-3xl">
                                {book.name}
                            </h3>
                            <p className="font-semibold text-text-light text-lg">
                                {book.author}
                            </p>
                        </div>
                        <FontAwesomeIcon
                            className="p-[15px] rounded-[50%] text-xl
                        bg-bgr-main text-text-color"
                            icon={faCartShopping}
                        />
                    </div>

                    {/*//* Price */}
                    <div className="font-semibold text-3xl border-t border-b border-[#cfcfcf] py-4">
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
                        <FormButton main={false} name="Buy now"></FormButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.object,
};

export default BookDetail;

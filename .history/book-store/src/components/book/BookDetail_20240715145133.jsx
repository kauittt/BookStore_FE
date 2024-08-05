import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/FormButton";

const BookDetail = (props) => {
    const book = props.book;
    return (
        <div className="flex gap-[20px] ">
            {/*//* Image */}
            <div className="min-w-[470px] max-w-[470px] h-[470px]">
                <img
                    className="w-full h-full object-cover"
                    src={book.image}
                    alt="Image"
                />
            </div>

            {/*//* Info  */}
            <div className="flex flex-col gap-[60px] justify-between">
                {/*//* Title */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-[10px]">
                        <h3 className="font-semibold text-3xl">{book.name}</h3>
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
                <div className="font-semibold text-3xl border-t border-b border-[#d2cfcf] py-5">
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
    );
};

BookDetail.propTypes = {
    book: PropTypes.object,
};

export default BookDetail;

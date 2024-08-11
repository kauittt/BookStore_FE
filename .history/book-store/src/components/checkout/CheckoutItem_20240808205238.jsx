import PropTypes from "prop-types";

const CheckoutItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;
    const total = (book.price * book.quantity).toFixed(2);
    return (
        <div
            className="flex justify-center items-center gap-[20px]
        h-[100px] "
        >
            <div
                className="flex justify-center relative
            w-[100px] h-full rounded shadow-custom"
            >
                <img
                    className="w-full h-full rounded shadow-custom"
                    src={book.image}
                    alt="Image"
                />

                <p
                    className="absolute text-center w-[30px] h-[30px] top-[-10px] right-[-15px]
                text-text-white text-lg bg-text-color rounded-full"
                >
                    {book.quantity}
                </p>
            </div>
            <p className="flex-1 text-center">{name}</p>
            <p className="w-[100px] text-center">{total}$</p>
        </div>
    );
};
CheckoutItem.propTypes = {
    book: PropTypes.object,
    quantity: PropTypes.number,
};
export default CheckoutItem;

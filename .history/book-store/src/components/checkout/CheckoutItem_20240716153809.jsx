import PropTypes from "prop-types";

const CheckoutItem = (props) => {
    const book = props.book;
    const name = book.name + " - " + book.author;
    return (
        <div
            className="flex justify-center items-center gap-[20px]
        h-[100px] "
        >
            <div
                className="flex justify-center
            w-[100px] h-full rounded shadow-custom"
            >
                <img
                    className="w-full h-full rounded shadow-custom"
                    src={book.image}
                    alt="Image"
                />
            </div>
            <p className="flex-1 text-center">{name}</p>
            <p className="w-[100px] text-center">
                {book.price * book.quantity}$
            </p>
        </div>
    );
};
CheckoutItem.propTypes = {
    book: PropTypes.object,
};
export default CheckoutItem;
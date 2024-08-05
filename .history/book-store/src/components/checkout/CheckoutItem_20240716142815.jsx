import PropTypes from "prop-types";

const CheckoutItem = () => {
    return (
        <div
            className="flex justify-center items-center gap-[10px]
        h-[100px]"
        >
            <div className="w-[100px] h-full">
                <img
                    className="w-full h-full"
                    src="https://hanoibookstore.com/storage/machine-learning-with-pytorch-and-scikit-learn-hanoi-book-store-1-150x150.jpg"
                    alt="Image"
                />
            </div>
            <p className="flex-1 text-center">
                Machine Learning With PyTorch and Scikit-Learn - hanoi book
                store
            </p>
            <p className="w-[100px] text-center">99$</p>
        </div>
    );
};
CheckoutItem.propTypes = {};
export default CheckoutItem;

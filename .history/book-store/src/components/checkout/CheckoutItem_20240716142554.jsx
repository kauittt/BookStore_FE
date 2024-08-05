import PropTypes from "prop-types";

const CheckoutItem = () => {
    return (
        <div className="flex h-[100px]">
            <div className="w-[100px] h-full">
                <img className="w-full h-full" src="" alt="" />
            </div>
            <p className="">
                Machine Learning With PyTorch and Scikit-Learn - hanoi book
                store
            </p>
            <p className="">99$</p>
        </div>
    );
};
CheckoutItem.propTypes = {};
export default CheckoutItem;

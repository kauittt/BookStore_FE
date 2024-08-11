import { toast } from "react-toastify";
import { updateCart } from "../../redux/Action/cartAction";

export const handleCartUpdate = async (dispatch, userId, bookId, quantity) => {
    const response = await dispatch(updateCart(userId, bookId, quantity));
    if (response.success) {
        toast.info("Add book successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        const error = `You have reached the maximum stock limit for this book.`;
        toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
};

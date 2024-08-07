import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FormButton from "../elements/FormButton";
import BackNavigation from "../elements/BackNavigation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedBook } from "../../redux/Reducer/bookSlice";
import { updateCart } from "../../redux/Action/cartAction";
import { selectUser } from "../../redux/Reducer/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleCartUpdate } from "./../utils/cartUtils";

const BookDetailPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const book = useSelector(selectSelectedBook);
    const user = useSelector(selectUser);

    const handleAddToCart = async () => {
        await handleCartUpdate(dispatch, user.id, book.id, 1);
    };

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
                <div className="flex-1 flex flex-col gap-[30px] justify-between">
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
                            onClick={handleAddToCart}
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

export default BookDetailPage;

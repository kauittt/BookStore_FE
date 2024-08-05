import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";

const AdminNav = () => {
    return (
        <div
            className="flex flex-col  gap-[100px]  
            font-semibold text-lg  w-[260px] 
            bg-bgr-main shadow-custom rounded"
        >
            <div className="w-full flex justify-center mt-[50px]">
                <img
                    src="./image/Logo.png"
                    alt="Logo"
                    className="w-[90px] h-[50px]  object-cover"
                />
            </div>

            <div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                >
                    <p className="">
                        <FontAwesomeIcon className="mr-[20px]" icon={faGauge} />
                        Dashboard
                    </p>
                </div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                >
                    <p className="">
                        <FontAwesomeIcon className="mr-[20px]" icon={faBook} />
                        Books
                    </p>
                </div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                >
                    <p className="">
                        <FontAwesomeIcon className="mr-[20px]" icon={faUser} />
                        Users
                    </p>
                </div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                >
                    <p className="flex gap-[10px]">
                        <FontAwesomeIcon className="" icon={faCartShopping} />
                        Orders
                    </p>
                </div>
            </div>
        </div>
    );
};

AdminNav.propTypes = {
    book: PropTypes.object,
};
export default AdminNav;

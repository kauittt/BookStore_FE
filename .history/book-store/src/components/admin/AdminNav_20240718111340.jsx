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
            className="flex flex-col  gap-[100px]  font-semibold text-lg
            w-[260px]"
        >
            <div className="">
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
            group hover:bg-bgr-main hover:shadow-custom
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
            group hover:bg-bgr-main hover:shadow-custom
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
            group hover:bg-bgr-main hover:shadow-custom
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
            group hover:bg-bgr-main hover:shadow-custom
            cursor-pointer"
                >
                    <p className="">
                        <FontAwesomeIcon
                            className="mr-[20px]"
                            icon={faCartShopping}
                        />
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

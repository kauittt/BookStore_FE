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
        <div className="flex flex-col font-semibold text-lg">
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
                    Book Management
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
                    User Management
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
                    Order Management
                </p>
            </div>
        </div>
    );
};

AdminNav.propTypes = {
    book: PropTypes.object,
};
export default AdminNav;

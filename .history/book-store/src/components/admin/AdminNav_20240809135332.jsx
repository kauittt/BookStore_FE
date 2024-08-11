import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faUser,
    faBook,
    faGauge,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AdminNav = (props) => {
    const navigate = useNavigate();
    return (
        <div
            className="flex flex-col  gap-[100px]  
            font-semibold text-lg  w-[260px] 
            bg-bgr-main shadow-custom rounded"
        >
            <div
                className="w-full flex justify-center mt-[50px] pb-[50px]
            border-b border-border cursor-pointer"
            >
                <img
                    src="./image/Logo.png"
                    alt="Logo"
                    className="w-[90px] h-[50px]  object-cover"
                    onClick={() => navigate("/home")}
                />
            </div>

            <div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                >
                    <p className="flex gap-[10px]">
                        <FontAwesomeIcon
                            className="mr-[20px] w-[20px] h-[20px]"
                            icon={faGauge}
                        />
                        Dashboard
                    </p>
                </div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                    onClick={() => setContent("Books")}
                >
                    <p className="flex gap-[10px]">
                        <FontAwesomeIcon
                            className="mr-[20px] w-[20px] h-[20px]"
                            icon={faBook}
                        />
                        Books
                    </p>
                </div>
                <div
                    className="p-[16px] 
            transition-all duration-200 ease-in-out
            group hover:bg-bgr-white hover:shadow-custom rounded
            cursor-pointer"
                >
                    <p className="flex gap-[10px]">
                        <FontAwesomeIcon
                            className="mr-[20px]  w-[20px] h-[20px]"
                            icon={faUser}
                        />
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
                        <FontAwesomeIcon
                            className="mr-[20px] w-[20px] h-[20px]"
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
    setContent: PropTypes.func,
};
export default AdminNav;

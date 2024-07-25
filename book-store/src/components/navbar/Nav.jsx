import {
    faUser,
    faCartShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <nav className="bg-bgr-main mb-[30px]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/*//* Logo  */}
                <Link
                    to="/home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/image/Logo.png" className="h-8" alt="Logo" />
                </Link>

                {/*//* Search  */}
                <div className="flex md:order-1 cursor-pointer w-[400px]">
                    <div className="relative md:block w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                            ></FontAwesomeIcon>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="w-ful block w-full h-[50px] p-2 ps-10 text-sm  rounded-lg 
                            text-gray-900 bg-gray-50
                            shadow-custom focus:outline-none focus:ring-2 focus:ring-text-color focus:border-none"
                            placeholder="Search..."
                        />
                    </div>
                </div>

                {/*//* Icon  */}
                <div
                    className="flex items-center justify-between gap-[10px]
                    text-xl 
                    w-full md:flex md:w-auto md:order-2"
                    id="navbar-search"
                >
                    {/*//* Cart icon  */}
                    <Link to="/cart">
                        <FontAwesomeIcon
                            className="p-[15px] 
                            hover-main
                            transition-base"
                            icon={faCartShopping}
                        ></FontAwesomeIcon>
                    </Link>

                    {/*//* User icon */}
                    <div
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="relative"
                    >
                        <Link to="/user">
                            <FontAwesomeIcon
                                className=" p-[15px] text-text-color transition-base"
                                icon={faUser}
                            ></FontAwesomeIcon>
                        </Link>
                        {isHovering && (
                            <div
                                className="flex flex-col items-end justify-center gap-[10px]
                               w-[110px] p-[10px]
                                absolute top-[55px] right-0
                                bg-bgr-white shadow-custom rounded-lg
                            text-base text-right"
                            >
                                <Link
                                    to="/user"
                                    className="w-full p-[5px] rounded hover:bg-bgr-main hover:shadow-custom
                                    transition-base"
                                >
                                    Info
                                </Link>
                                <Link
                                    to="/admin"
                                    className=" w-full p-[5px] rounded hover:bg-bgr-main hover:shadow-custom
                                    transition-base"
                                >
                                    Admin
                                </Link>
                                <Link
                                    to="/login"
                                    className=" w-full p-[5px] rounded hover:bg-bgr-main hover:shadow-custom
                                    transition-base"
                                >
                                    Sign out
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* <Link to="/user">
                        <FontAwesomeIcon
                            className="p-[15px] 
                            hover-main
                            transition-base"
                            icon={faUser}
                        ></FontAwesomeIcon>
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Nav;

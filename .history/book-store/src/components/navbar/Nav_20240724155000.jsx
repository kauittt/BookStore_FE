import {
    faUser,
    faCartShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
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
                            className="w-ful block w-full p-2 ps-10 text-sm  rounded-lg 
                            text-gray-900 border border-border bg-gray-50 
                            shadow-custom focus:outline-none focus:ring-2 focus:ring-text-color focus:border-none"
                            placeholder="Search..."
                        />
                    </div>
                </div>

                {/*//* Icon  */}
                <div
                    className="flex items-center justify-between gap-[10px]
                    text-2xl 
                    w-full md:flex md:w-auto md:order-2"
                    id="navbar-search"
                >
                    <Link to="/cart">
                        <FontAwesomeIcon
                            className="p-[15px] hover:text-text-color 
                            transition-base"
                            icon={faCartShopping}
                        ></FontAwesomeIcon>
                    </Link>

                    <Link to="/user">
                        <FontAwesomeIcon
                            className="p-[15px] hover:text-text-color 
                            transition-base"
                            icon={faUser}
                        ></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

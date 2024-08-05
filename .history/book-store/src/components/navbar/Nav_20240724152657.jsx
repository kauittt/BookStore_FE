import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/*//* Logo  */}
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/image/Logo.png" className="h-8" alt="Logo" />
                </a>

                {/*//* Search  */}
                <div className="flex md:order-1">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
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
                            transition-all duration-200 ease-in-out"
                            icon={faCartShopping}
                        ></FontAwesomeIcon>
                    </Link>

                    <Link to="/user">
                        <FontAwesomeIcon
                            className="p-[15px] hover:text-text-color 
                            transition-all duration-200 ease-in-out"
                            icon={faUser}
                        ></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

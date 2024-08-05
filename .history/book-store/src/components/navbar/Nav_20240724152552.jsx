import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "./../elements/FormInput";

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
                <FormInput></FormInput>

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

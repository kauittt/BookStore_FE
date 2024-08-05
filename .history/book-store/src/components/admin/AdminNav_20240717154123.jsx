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
        <div className="flex flex-col gap-[50px] font-semibold text-lg">
            <div>
                <p className="">
                    <FontAwesomeIcon className="mr-[20px]" icon={faGauge} />
                    Dashboard
                </p>
            </div>
            <div>
                <p className="">
                    <FontAwesomeIcon className="mr-[20px]" icon={faBook} />
                    Manage Books
                </p>
            </div>
            <div>
                <p className="">
                    <FontAwesomeIcon className="mr-[20px]" icon={faUser} />
                    Manage Customer
                </p>
            </div>
            <div>
                {" "}
                <p className="">
                    {" "}
                    <FontAwesomeIcon
                        className="mr-[20px]"
                        icon={faCartShopping}
                    />
                    Manage Order
                </p>
            </div>
        </div>
    );
};

AdminNav.propTypes = {
    book: PropTypes.object,
};
export default AdminNav;

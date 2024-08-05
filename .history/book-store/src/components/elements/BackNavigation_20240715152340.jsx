import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const BackNavigation = () => {
    return (
        <h2 className="font-semibold text-lg">
            <FontAwesomeIcon className="mr-[10px]" icon={faAngleLeft} />
            Book Details
        </h2>
    );
};

export default BackNavigation;

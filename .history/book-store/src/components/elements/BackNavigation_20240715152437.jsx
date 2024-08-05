import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const BackNavigation = (props) => {
    return (
        <h2 className="font-semibold text-lg">
            <FontAwesomeIcon className="mr-[10px]" icon={faAngleLeft} />
            {props.title}
        </h2>
    );
};

BackNavigation.propsType = {
    title: PropTypes.string,
};

export default BackNavigation;

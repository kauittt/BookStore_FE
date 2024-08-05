import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BackNavigation = (props) => {
    const navigate = useNavigate();

    return (
        <h2 className="font-semibold text-lg cursor-pointer">
            {/* <FontAwesomeIcon className="mr-[10px]" icon={faAngleLeft} /> */}
            <FontAwesomeIcon
                className="text-2xl p-[10px] mr-[10px]
                            cursor-pointer hover:text-text-color
                            transition-base"
                icon={faAngleLeft}
                onClick={() => navigate("/home")}
            ></FontAwesomeIcon>
            {props.title}
        </h2>
    );
};

BackNavigation.propTypes = {
    title: PropTypes.string,
};

export default BackNavigation;

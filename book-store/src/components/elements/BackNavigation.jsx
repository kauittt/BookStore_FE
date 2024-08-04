import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BackNavigation = (props) => {
    const navigate = useNavigate();

    return (
        <h2
            className="flex items-center gap-[10px]
        font-semibold text-xl "
        >
            <FontAwesomeIcon
                className="text-2xl p-[10px] rounded
                            cursor-pointer hover-main
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

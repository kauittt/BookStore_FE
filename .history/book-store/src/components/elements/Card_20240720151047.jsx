import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = (props) => {
    return (
        <div
            className="flex items-center justify-between
            w-[280px] h-[100px] bg-bgr-main p-[30px]
        rounded shadow-custom"
        >
            <div className="flex flex-col gap-[10px]">
                <p className="text-lg text-text-light font-semibold">
                    {props.name}
                </p>
                <p className="text-2xl font-semibold">{props.quantity}</p>
            </div>
            <FontAwesomeIcon
                className={`p-[17px] rounded-full text-text-white bg-text-color `}
                icon={props.icon}
            />
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    icon: PropTypes.object,
};
export default Card;

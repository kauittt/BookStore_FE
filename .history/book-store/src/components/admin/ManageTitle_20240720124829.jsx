import React from "react";
import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";

const ManageTitle = (props) => {
    return (
        <div
            className="flex justify-between items-center 
        h-[80px] bg-bgr-main p-[20px]
            rounded shadow-custom"
        >
            <p className="font-semibold text-lg">{props.name}</p>
            <FormButton name={props.button}></FormButton>
        </div>
    );
};

ManageTitle.propTypes = {
    name: PropTypes.string,
    button: PropTypes.string,
};

export default ManageTitle;

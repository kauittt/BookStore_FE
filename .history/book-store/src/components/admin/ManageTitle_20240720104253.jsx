import React from "react";
import PropTypes from "prop-types";
import FormButton from "./../elements/FormButton";

const ManageTitle = (props) => {
    return (
        <div className="flex justify-between items-center ">
            <p className="">{props.name}</p>
            <FormButton name={props.button}></FormButton>
        </div>
    );
};

ManageTitle.propTypes = {
    name: PropTypes.string,
    button: PropTypes.string,
};

export default ManageTitle;

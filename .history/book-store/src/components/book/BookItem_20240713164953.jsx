import PropTypes from "prop-types";

import React from "react";

const BookItem = (props) => {
    return (
        <div className="m-w-[270px] w-[270px] h-[255px] m-h-[255px] overflow-hidden">
            <div className="m-w-[180px] w-[180px] h-[255px] m-h-[255px]">
                <img className="" src={props.image} alt="Image" />
            </div>
            <div className="">
                <div className="">
                    <p className="">{props.name}</p>
                    <p className="">{props.author}</p>
                </div>
                <p className="">{`${props.price}$`}</p>
            </div>
        </div>
    );
};
BookItem.propTypes = {
    image: PropTypes.string,
    price: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
};

export default BookItem;

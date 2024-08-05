import PropTypes from "prop-types";

import React from "react";

const BookItem = (props) => {
    return (
        <div className="m-w-[270px] w-[270px] h-[255px] m-h-[255px] overflow-hidden bg-bgr-main">
            <div className="m-w-[180px] w-[180px] h-[175px] m-h-[175px]">
                <img
                    className="w-full h-full object-cover"
                    src={props.image}
                    alt="Image"
                />
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

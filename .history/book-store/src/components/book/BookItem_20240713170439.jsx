import PropTypes from "prop-types";

import React from "react";

const BookItem = (props) => {
    return (
        <div
            className="m-w-[180px] w-[180px] h-[260px] m-h-[260px] overflow-hidden bg-bgr-main rounded
                        p-[10px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        >
            <div className="m-w-[160px] w-[160px] h-[175px] m-h-[175px] rounded  ">
                <img
                    className="w-full h-full object-cover rounded shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
                    src={props.image}
                    alt="Image"
                />
            </div>
            <div className="flex justify-between items-center mt-[20px]">
                <div className="">
                    <p className="text-base">{props.name}</p>
                    <p className="text-text-light text-">{props.author}</p>
                </div>
                <p className="text-text-color font-semibold text-lg">{`${props.price}$`}</p>
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

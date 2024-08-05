import PropTypes from "prop-types";

import React from "react";

const BookItem = (props) => {
    return (
        <div
            className="m-w-[180px] w-[180px] h-[260px] m-h-[260px] overflow-hidden bg-bgr-main rounded
                        p-[10px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
        >
            <div className="m-w-[160px] w-[160px] h-[175px] m-h-[175px] rounded  ">
                <img
                    className="w-full h-full object-cover rounded shadow "
                    src={props.image}
                    alt="Image"
                />
            </div>
            <div className="flex justify-between items-center mt-[20px]">
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

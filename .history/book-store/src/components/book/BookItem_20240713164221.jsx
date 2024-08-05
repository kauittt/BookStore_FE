import PropTypes from "prop-types";

import React from "react";

const BookItem = (props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt="Image" />
            </div>
            <div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.author}</p>
                </div>
                <p>{`${props.price}$`}</p>
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

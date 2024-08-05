import PropTypes from "prop-types";

import React from "react";

const BookItem = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <p></p>
            </div>
        </div>
    );
};
BookItem.propTypes = {
    image:PropTypes.string, price:PropTypes.string, name:PropTypes.string author:PropTypes.string
};

export default BookItem;

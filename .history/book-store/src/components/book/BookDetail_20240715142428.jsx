import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const BookDetail = (props) => {
    return (
        <div>
            {/*//* Image */}
            <div>
                <img src="" alt="" />
            </div>

            {/*//* Info  */}
            <div>
                {/*//* Title */}
                <div>
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>

                {/*//* Description  */}
                <div></div>
            </div>
        </div>
    );
};

BookDetail.propTypes = {
    book: PropTypes.ob,
};

export default BookDetail;

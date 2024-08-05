import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const BookDetail = () => {
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

BookDetail.propTypes = {};

export default BookDetail;

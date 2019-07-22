import React from "react";
import PropTypes from "prop-types";

function Count(props) {

    function formatDate(date) {
        let _date = new Date(date);
        return(_date.toLocaleDateString("en-US"));
    }

    return (
        <div className="count cards__count">
            <div className="count__item">
                <div className={props.className}>
                    {formatDate(props.start)}
                </div>
                <div className="count__subtitle">
                    start
                </div>
            </div>
            <div className="count__item">
                <div className={props.className}>
                    {formatDate(props.end)}
                </div>
                <div className="count__subtitle">
                    end
                </div>
            </div>
        </div>
    );
}

Count.propTypes = {
    className: PropTypes.string.isRequired
};

export default Count;

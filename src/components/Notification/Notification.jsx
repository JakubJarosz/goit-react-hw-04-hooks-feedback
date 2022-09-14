import React from "react";
import PropTypes from "prop-types";


class Notification extends React.Component {
    render() {
        const {message} = this.props;
        return (
            <p>{message}</p>
        )
    }

};

Notification.propTypes = {
    message: PropTypes.string.isRequired
};
 
export default Notification
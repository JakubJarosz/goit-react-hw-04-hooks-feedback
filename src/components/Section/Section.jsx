import React from "react";
import PropTypes from "prop-types";


class Section extends React.Component {
    render() {
        const { title, children} = this.props;
        return (
            <div>
                <h3>{title}</h3> 
                {children}
            </div>
        )
    }

};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}; 

export default Section
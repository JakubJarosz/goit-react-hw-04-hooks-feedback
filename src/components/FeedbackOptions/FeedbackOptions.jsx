import React from "react";
import PropTypes from "prop-types";

class FeedbackOptions extends React.Component {
    render() {
        const { goodIncrease, neutralIncrease, badIncrease } = this.props;
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <button onClick={goodIncrease}>Good</button>
                    <button onClick={
                        neutralIncrease
                    }>Neutral</button>
                    <button onClick={
                        badIncrease
                    }>Bad</button>
                </div>
            </div>
        )
    }

};

FeedbackOptions.propTypes = {
    goodIncrease: PropTypes.func.isRequired,
    neutralIncrease: PropTypes.func.isRequired,
    badIncrease: PropTypes.func.isRequired
};

export default FeedbackOptions
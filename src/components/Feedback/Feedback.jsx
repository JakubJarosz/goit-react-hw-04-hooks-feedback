import React from "react";
import Statistic from "../Statistic/Statistic";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    incrementStateField = stateField => {
        this.setState({ ...this.state, [stateField]: this.state[stateField] + 1 })
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        return good + bad + neutral
    }

    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback() > 0 ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) : 0;
    }
    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
            <div>
                <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.incrementStateField}
                    />
                </Section>
                {this.countTotalFeedback() > 0 ? (<Section title="Statistics">
                <Statistic
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>) : (<Notification message={"There is no feedback"}/>)}
            </div>
        )
    }

};


export default Feedback
import React, { useState, useEffect } from "react";
import Statistic from "../Statistic/Statistic";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";


const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    const incrementGood = () => {
        return setGood(good + 1)
    };

    const incrementNeutral = () => {
        return setNeutral(neutral + 1)
    };

    const incrementBad = () => {
        return setBad(bad + 1)
    };

    useEffect(() => {
        setTotal(good + neutral + bad)

    }, [good, neutral, bad]);

    


    const countPositiveFeedbackPercentage = () => {
        return total > 0 ? ((good / total) * 100).toFixed(2) : 0
    }

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    goodIncrease={incrementGood}
                    neutralIncrease={incrementNeutral}
                    badIncrease={incrementBad}
                />
            </Section>
            {total > 0 ? (<Section title="Statistics">
                <Statistic
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={countPositiveFeedbackPercentage()}
                />
            </Section>) : (<Notification message={"There is no feedback"} />)}
        </div>
    );
};


export default Feedback
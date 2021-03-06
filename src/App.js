import React, { Component } from 'react';

import Section from './components/Section'
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import './Container.css';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    countTotalFeedback = () => {
        const totalValue = Object.values(this.state).reduce((acc, value) => acc + value, 0);
        return totalValue;
    };

    countPositiveFeedbackPercentage = () => {
        const positivePercentage = Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
        return positivePercentage;
    };

    render() {
        return (
            <div className="Container">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.onLeaveFeedback}/>
                </Section>
                
                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback}
                        positivePercentage={this.countPositiveFeedbackPercentage}/>
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                    
                </Section>
            </div>  
        );
    };
};

export default App;
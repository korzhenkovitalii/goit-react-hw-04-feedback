import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Statistics/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = e => {
    const fieldName = e.target.id;
    this.setState(prevState => {
      return {
        [fieldName]: prevState[fieldName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(0);

    if (this.state.good === 0 && this.countTotalFeedback() === 0) {
      return 0;
    }

    return positiveFeedback;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

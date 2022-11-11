import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Statistics/Notification';

export const App = () => {
  const [feedbacks, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 });

  const incrementFeedback = name => {
    setFeedback(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedbacks);

    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = (
      (feedbacks.good / countTotalFeedback()) *
      100
    ).toFixed(0);

    if (feedbacks.good === 0 && countTotalFeedback() === 0) {
      return 0;
    }

    return positiveFeedback;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={incrementFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

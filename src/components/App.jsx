import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function SignupForm() {
  const [good, SetGood] = useState(0);
  const [neutral, SetNeutral] = useState(0);
  const [bad, SetBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        SetGood(state => state + 1);
        break;

      case 'neutral':
        SetNeutral(state => state + 1);
        break;

      case 'bad':
        SetBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const positivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback);
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      {countTotalFeedback === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </>
  );
}

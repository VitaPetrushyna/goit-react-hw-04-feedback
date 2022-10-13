import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackBtn
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

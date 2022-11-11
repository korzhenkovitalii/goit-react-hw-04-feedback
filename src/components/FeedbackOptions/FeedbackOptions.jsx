import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return options.map(option => (
    <button
      key={option}
      id={option}
      className={css.button}
      type="button"
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

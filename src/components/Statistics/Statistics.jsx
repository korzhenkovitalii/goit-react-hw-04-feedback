import React from 'react';
import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.description}>Good: {good}</p>
      <p className={css.description}>Neutral: {neutral}</p>
      <p className={css.description}>Bad: {bad}</p>
      <p className={css.description}>Total: {total}</p>
      <p className={css.description}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

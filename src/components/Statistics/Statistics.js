import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => (
    <>
        <span className={styles.span}>Good: {good}</span>
        <span className={styles.span}>Neutral: {neutral}</span>
        <span className={styles.span}>Bad: {bad}</span>
        <span className={styles.span}>Total: {total()}</span>
        <span className={styles.span}>Positive feedback: {positivePercentage()}%</span>
    </>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
};

export default Statistics;
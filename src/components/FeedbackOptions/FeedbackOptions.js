import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
<div>
   {options.map(( option ) => (
        <button
            key={option}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
            className={styles.button}>
            {option}
        </button>
    ))} 
</div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.feedbackItem}>
        <li className={css.feedbackList}>Good: {good}</li>
        <li className={css.feedbackList}>Neutral: {neutral}</li>
        <li className={css.feedbackList}>Bad: {bad}</li>
        <li className={css.feedbackList}>Total: {total}</li>
        <li className={css.feedbackList}>Positive Feedback: {positivePercentage} %</li>
    </ul>
)

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
}

export default Statistics;
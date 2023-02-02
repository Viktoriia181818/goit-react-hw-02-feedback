import propTypes from 'prop-types';
import css from './Title.module.css';

export const Title = ({ title, children }) => (
    <div>
        <h2 className={css.title}>{title}</h2>
         {children}
    </div>    
)

Title.propTypes = {
    title: propTypes.string.isRequired,
}
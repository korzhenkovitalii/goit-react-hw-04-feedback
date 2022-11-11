import css from 'components/Section/Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
      <>
        <h2 className={css.title}>{title}</h2>
        <div>{children}</div>
      </>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
import PropTypes from 'prop-types';
import s from './filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ filter, onChange }) {
  return (
    <label className={styles.filter}>
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

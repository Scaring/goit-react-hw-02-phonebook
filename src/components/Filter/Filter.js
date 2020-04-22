import React from 'react';
import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <label>
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

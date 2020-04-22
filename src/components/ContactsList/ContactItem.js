import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function ContactsItem({ name, number, onDelete }) {
  return (
    <Fragment>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </Fragment>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsItem;

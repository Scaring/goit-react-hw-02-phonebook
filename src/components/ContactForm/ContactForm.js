import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactForm/ContactForm.module.css';

function ContactForm({ name, number, onChange, onSubmit }) {
  return (
    <form className={styles.contactForm} onSubmit={onSubmit}>
      <label className={styles.contactFormInput}>
        Name
        <input type="text" name="name" value={name} onChange={onChange}></input>
      </label>
      <label className={styles.contactFormInput}>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={onChange}
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

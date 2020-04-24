import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactForm/ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', number: '' };

  resetState() {
    this.setState({ name: '', number: '' });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;
    const { contacts, onSubmit } = this.props;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    } else if (!name) return;

    onSubmit({ ...this.state });

    this.resetState();
  };

  render() {
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label className={styles.contactFormInput}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.contactFormInput}>
          <span>Number</span>
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

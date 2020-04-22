import React, { Component, Fragment } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { v4 as uuidv4 } from 'uuid';

const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts, name, number } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const inputedContact = {
      name: name,
      number: number,
      id: uuidv4(),
    };

    this.setState(() => ({
      contacts: [...contacts, inputedContact],
      name: '',
      number: '',
    }));
  };

  handleDeleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <Fragment>
        <h2>Phonebook</h2>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        {this.state.contacts.length >= 2 && (
          <Filter filter={this.filter} onChange={this.handleChange} />
        )}
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.handleDeleteContact}
        />
      </Fragment>
    );
  }
}

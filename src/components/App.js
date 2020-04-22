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
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
          contacts={this.state.contacts}
          onSubmit={this.addContact}
        />
        {this.state.contacts.length >= 1 && <h2>Contacts</h2>}
        {this.state.contacts.length >= 2 && (
          <Filter filter={this.filter} onChange={this.handleChange} />
        )}
        {this.state.contacts.length >= 1 && (
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.handleDeleteContact}
          />
        )}
      </Fragment>
    );
  }
}

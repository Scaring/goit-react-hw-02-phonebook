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
    const { contacts, filter } = this.state;

    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));

    const filteredContacts = filterContacts(contacts, filter);

    if (filteredContacts.length === 1) {
      this.setState({ filter: '' });
    }
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <Fragment>
        <h2>Phonebook</h2>
        <ContactForm contacts={contacts} onSubmit={this.addContact} />
        {contacts.length >= 1 && (
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.handleDeleteContact}
          >
            <h2>Contacts</h2>
            {contacts.length >= 2 && (
              <Filter filter={filter} onChange={this.handleChange} />
            )}
          </ContactsList>
        )}
      </Fragment>
    );
  }
}

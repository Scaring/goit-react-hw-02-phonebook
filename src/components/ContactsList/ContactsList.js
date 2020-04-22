import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactItem';

function ContactsList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactsItem {...contact} onDelete={() => onDelete(contact.id)} />
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsList;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactItem';
import styles from './ContactsList.module.css';

function ContactsList({ contacts, onDelete, children }) {
  return (
    <Fragment>
      {children}
      <ul className={styles.contactsList}>
        {contacts.map(contact => {
          return (
            <li className={styles.contactsListItem} key={contact.id}>
              <ContactsItem
                {...contact}
                onDelete={() => onDelete(contact.id)}
              />
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

ContactsList.propTypes = {
  children: PropTypes.node,
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

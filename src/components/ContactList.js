import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactItem contact={contact} />
            <button onClick={() => deleteContact(contact.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

// src/components/ContactList.js
import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
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
};

export default ContactList;

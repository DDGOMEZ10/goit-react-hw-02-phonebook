import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} ya está en la agenda.`);
    } else {
      this.setState({ contacts: [...contacts, newContact] });
    }
  };

  deleteContact = (contactId) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={(newFilter) => this.setState({ filter: newFilter })} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;


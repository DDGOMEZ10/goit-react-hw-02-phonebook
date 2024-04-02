import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      this.props.addContact(newContact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del contacto"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Número de teléfono"
          value={number}
          onChange={(e) => this.setState({ number: e.target.value })}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    );
  }
}

export default ContactForm;

import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { contact } = this.props;
    return <li>{contact.name} ({contact.number})</li>;
  }
}

export default ContactItem;

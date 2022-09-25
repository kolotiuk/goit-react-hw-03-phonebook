import React, { Component } from 'react';
import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

export default class PhonePage extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDelete = item => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== item),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisisbleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { handleAddContact, handleDelete, handleChangeFilter } = this;
    const visible = this.getVisisbleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <Form handleAddContact={handleAddContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactsList contacts={visible} handleDelete={handleDelete} />
      </>
    );
  }
}

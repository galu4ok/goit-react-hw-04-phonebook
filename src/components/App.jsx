import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import initialContacts from '../data.json';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`Contact ${newContact.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    console.log(this.state);
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <ContactsList contacts={filteredContacts} />

        <GlobalStyle />
      </>
    );
  }
}

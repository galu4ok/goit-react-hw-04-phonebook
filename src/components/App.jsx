import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import initialContacts from '../data.json';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

const localeStorageKey = 'phonebook-contacts';
export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(localeStorageKey);
    if (savedContacts !== null) {
      // this.setState({ contacts: initialContacts });
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts: prevContacts } = prevState;
    const { contacts: nextContacts } = this.state;

    if (prevContacts !== nextContacts) {
      localStorage.setItem(localeStorageKey, JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      return alert(`Contact ${newContact.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.value} onChange={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.handleDelete}
        />
        <GlobalStyle />
      </>
    );
  }
}

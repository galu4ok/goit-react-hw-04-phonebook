import { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import initialContacts from '../data.json';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

const localeStorageKey = 'phonebook-contacts';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem(localeStorageKey);
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  //Запис нових контактів в localeStorage
  useEffect(() => {
    localStorage.setItem(localeStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      return alert(`Contact ${newContact.name} is already in contacts`);
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = getFilteredContacts();

  const changeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const deletedContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={filteredContacts} onDelete={deletedContact} />
      <GlobalStyle />
    </>
  );
};

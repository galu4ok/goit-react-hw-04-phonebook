import { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactsForm></ContactsForm>
        <h2>Contacts</h2>

        <GlobalStyle />
      </>
    );
  }
}

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

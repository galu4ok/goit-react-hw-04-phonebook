import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListItem } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactItem contact={contact} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

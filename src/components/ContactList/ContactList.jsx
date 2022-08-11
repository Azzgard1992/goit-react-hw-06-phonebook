import { ListItem } from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filterContacts.map(({ name, number, id }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

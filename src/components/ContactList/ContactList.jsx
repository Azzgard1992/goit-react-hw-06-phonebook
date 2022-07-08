import PropTypes from 'prop-types';
import { ListItem } from 'components/ListItem/ListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ onFilterContacts, onDeleteContact }) => {
  return (
    <List>
      {onFilterContacts().map(({ name, number, id }) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

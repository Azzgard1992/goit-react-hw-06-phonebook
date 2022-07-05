import PropTypes from 'prop-types';
import { Button, Item } from './ContactList.styled';

export const ContactList = ({ onFilterContacts, onDeleteContact }) => {
  return (
    <ol>
      {onFilterContacts().map(({ name, number, id }) => (
        <Item key={id}>
          {name} : {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ol>
  );
};

ContactList.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { Item, Button } from './ListItem.styled';

export const ListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <Item>
      {name} : {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

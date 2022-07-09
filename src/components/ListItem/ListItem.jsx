import PropTypes from 'prop-types';
import { Button, Item, Text } from './ListItem.styled';

export const ListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <Item>
      <Text>
        {name} : {number}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

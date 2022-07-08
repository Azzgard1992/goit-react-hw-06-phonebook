import PropTypes from 'prop-types';
import { Item, Text } from './ListItem.styled';
import { Button } from 'components/Button/Button';

export const ListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <Item>
      <Text>
        {name} : {number}
      </Text>
      <Button size="75" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

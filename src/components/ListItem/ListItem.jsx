import PropTypes from 'prop-types';
import { Button, Item, Text } from './ListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/constactsSlice';

export const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Text>
        {name} : {number}
      </Text>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Item>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

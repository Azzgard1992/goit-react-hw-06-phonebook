import PropTypes from 'prop-types';
import { ListItem } from 'components/ListItem/ListItem';

export const ContactList = ({ onFilterContacts, onDeleteContact }) => {
  return (
    <ol>
      {onFilterContacts().map(({ name, number, id }) => (
        <ListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ol>
  );
};

ContactList.propTypes = {
  onFilterContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

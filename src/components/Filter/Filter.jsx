import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice/constactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
        name="filter"
      />
    </div>
  );
};

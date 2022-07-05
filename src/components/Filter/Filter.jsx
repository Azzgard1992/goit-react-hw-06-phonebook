import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ onHandleChange, filter }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        value={filter}
        onChange={onHandleChange}
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

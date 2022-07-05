import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

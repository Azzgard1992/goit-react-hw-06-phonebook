import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, width }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

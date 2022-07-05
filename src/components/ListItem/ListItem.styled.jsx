import styled from '@emotion/styled';

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};

  :hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

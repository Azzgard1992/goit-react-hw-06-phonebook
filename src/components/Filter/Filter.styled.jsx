import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  width: ${p => p.theme.sizes.input}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  display: block;
  width: ${p => p.theme.sizes.input}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
`;

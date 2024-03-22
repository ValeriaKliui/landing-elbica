import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 0.7em 1em;
  border: none;
  color: white;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary};
  }
`;

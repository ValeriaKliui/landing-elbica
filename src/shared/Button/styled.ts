import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.7em 1em;
  border: none;
  color: white;
  align-self: flex-start;
  cursor: pointer;
`;

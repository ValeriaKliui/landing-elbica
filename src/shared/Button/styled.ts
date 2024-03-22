import styled from "styled-components";

import { transition } from "..";

export const ButtonStyled = styled.button`
  ${transition()};
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 0.7em 1em;
  border: none;
  color: white;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary_dark};
  }
`;

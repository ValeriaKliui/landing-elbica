import styled from "styled-components";

export const InputStyled = styled.input`
  padding: 1em;
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  background: transparent;
`;

import styled from "styled-components";

export const FormStyled = styled.form`
  background-color: ${({ theme: { colors } }) => colors.yellow};
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
`;
export const Subtext = styled.p`
  text-align: center;
`;

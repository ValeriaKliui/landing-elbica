import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: flex-start;
`;
export const LogoText = styled.h1`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
  margin-bottom: 0.2em;
`;
export const Subtext = styled.p`
  font-size: 15px;
`;

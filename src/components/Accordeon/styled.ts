import styled from "styled-components";

export const Container = styled.div`
  max-width: 70%;
  &:last-child {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
  }
`;
export const Item = styled.div`
  padding: 1em 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

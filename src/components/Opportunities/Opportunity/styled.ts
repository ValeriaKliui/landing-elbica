import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Options = styled.div`
  display: flex;
  gap: 0.5em;
`;
export const Option = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  border-radius: 3em;
  padding: 0.5em 1em;
  width: fit-content;
`;

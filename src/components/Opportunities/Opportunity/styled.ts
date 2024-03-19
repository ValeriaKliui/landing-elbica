import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .decorated-img {
    flex-basis: 35%;
  }
`;

export const OpportunityText = styled.div<{ $isOdd: boolean }>`
  order: ${({ $isOdd }) => ($isOdd ? 0 : -1)};
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;
export const Options = styled.div`
  display: flex;
  gap: 0.5em;
  max-width: 80%;
  flex-wrap: wrap;
`;
export const Option = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  border-radius: 3em;
  padding: 0.5em 1em;
  width: fit-content;
`;

import styled from "styled-components";

import { transition } from "@/shared";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    gap: 0.6em;
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    flex-direction: column-reverse;
  }
`;

export const OpportunityText = styled.div<{ $isOdd: boolean }>`
  order: ${({ $isOdd }) => ($isOdd ? 0 : -1)};
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    order: unset;
  }
`;
export const Options = styled.div`
  display: flex;
  gap: 0.5em;
  max-width: 80%;
  flex-wrap: wrap;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: none;
  }
`;
export const Option = styled.div`
  ${transition()};
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  border-radius: 3em;
  padding: 0.5em 1em;
  width: fit-content;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

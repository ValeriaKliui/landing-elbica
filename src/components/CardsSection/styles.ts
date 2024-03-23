import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    gap: 1em;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 0;
    overflow-y: hidden;
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-auto-rows: 0;
  }
`;

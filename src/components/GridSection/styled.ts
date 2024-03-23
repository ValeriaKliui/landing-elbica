import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: dense;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
export const GridCell = styled.div`
  &:nth-child(4n + 3) {
    grid-column: 2;
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    &:nth-child(4n + 3) {
      grid-column: unset;
    }
  }
`;

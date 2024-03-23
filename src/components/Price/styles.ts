import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    flex-direction: column;
  }
`;

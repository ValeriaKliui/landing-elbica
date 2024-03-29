import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme: { colors } }) => colors.primary_light};
`;
export const Container = styled.div`
  padding: 0 4em;
  display: flex;
  gap: 3.5em;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    padding: 0 2em;
  }

  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    width: unset;
    gap: 0.5em;
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
    flex-direction: column;
    padding: 0 1em;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

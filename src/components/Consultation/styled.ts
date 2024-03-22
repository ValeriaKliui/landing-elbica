import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme: { colors } }) => colors.primary_light};
`;
export const Container = styled.div`
  padding: 0 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1.5em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    padding: 0 0.4em;
  }
`;
export const Image = styled.img`
  max-width: 50%;
  object-fit: cover;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.sm} {
    display: none;
  }
`;
export const FormContainer = styled.div`
  display: flex;
`;

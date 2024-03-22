import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme: { colors } }) => colors.yellow};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
export const ImageContainer = styled.div`
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: none;
  }
`;
export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex-basis: 60%;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    flex-basis: unset;
  }
`;
export const Item = styled.li`
  display: flex;
  gap: 1.5em;
`;
export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const IconContainer = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 80px;
  width: 100%;
  max-width: 80px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

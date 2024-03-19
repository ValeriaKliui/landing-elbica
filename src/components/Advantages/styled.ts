import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme: { colors } }) => colors.yellow};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6em;
`;
export const ImageContainer = styled.div`
  flex-basis: 50%;
`;
export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;
export const Item = styled.li`
  display: flex;
  gap: 2em;
`;

export const IconContainer = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  min-width: 5em;
  height: 5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  flex-basis: 150px;
`;

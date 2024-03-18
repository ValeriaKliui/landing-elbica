import styled from "styled-components";

export const Section = styled.section`
  background-color: ${(props) => props.theme.colors.yellow};
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6em;
`;
export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

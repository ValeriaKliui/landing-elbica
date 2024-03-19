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
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const Form = styled.form`
  background-color: ${({ theme: { colors } }) => colors.yellow};
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
`;
export const Subtext = styled.p`
  text-align: center;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Text = styled.div`
  flex-basis: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const SectionTitle = styled.h2`
  &::after {
    content: "";
    background-color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 1px;
    display: block;
    margin-top: 0.5em;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: flex-end;
  a::after {
    content: "";
    width: 1px;
    height: 25px;
    background-color: ${(props) => props.theme.colors.secondary};
    display: inline-block;
    margin: 0 1em;
    position: relative;
    top: 5px;
  }
  a:last-child::after {
    display: none;
  }
`;

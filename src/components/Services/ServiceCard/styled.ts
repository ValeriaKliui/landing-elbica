import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  &:hover {
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.colors.secondary};
  }
`;
export const Link = styled.a`
  &::after {
    content: "→";
    margin-left: 1em;
  }
`;

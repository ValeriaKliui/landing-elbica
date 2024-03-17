import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: start;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

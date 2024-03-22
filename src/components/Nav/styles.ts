import styled from "styled-components";

export const NavContainer = styled.nav``;
export const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    flex-direction: column;
    align-items: center;
  }
`;

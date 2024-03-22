import styled from "styled-components";

import { transition } from "@/shared";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
  padding: 1em 0;
  width: 100%;
`;
export const Contacts = styled.div<{ $isOpened: boolean }>`
  display: flex;
  gap: 2em;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: ${({ $isOpened }) => ($isOpened ? "block" : "none")};
    position: absolute;
    z-index: 1000;
    bottom: 0;
  }
`;

export const ContactsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  align-items: center;
  justify-content: space-evenly;
`;
export const IconsWrapper = styled.span`
  @media ${({ theme: { deviceQueries } }) => deviceQueries.lg} {
    display: none;
  }
`;
export const NavWrapper = styled.div`
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: none;
  }
`;
export const Burger = styled.div<{ $isOpened: boolean }>`
  display: none;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    z-index: 1000;
    width: 30px;
  }

  .burger-line {
    ${transition()};
    display: block;
    height: 3px;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.primary};
    opacity: ${({ $isOpened }) => ($isOpened ? 0 : 1)};
  }
  .burger-line:first-child {
    transform: ${({ $isOpened }) =>
      $isOpened ? "rotate(45deg) translate(5px, 5px)" : "unset"};
    opacity: 1;
  }
  .burger-line:last-child {
    transform: ${({ $isOpened }) =>
      $isOpened ? "rotate(-45deg) translate(7px, -6px);" : "unset"};
    opacity: 1;
  }
`;

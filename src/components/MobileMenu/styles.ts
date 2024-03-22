import styled from "styled-components";

import { transition } from "@/shared";

export const Container = styled.div<{ $isOpened: boolean }>`
  ${transition()};
  position: absolute;
  left: ${({ $isOpened }) => ($isOpened ? 0 : "-1000%")};
  display: none;
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    display: block;
    background-color: ${({ theme: { colors } }) => colors.white};
    width: 100%;
    height: 100%;
    top: 0;
    padding: 3em;
    z-index: 100;
    box-sizing: border-box;
  }
`;

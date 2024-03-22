import styled from "styled-components";

import { transition } from "@/shared";

export const Container = styled.div`
  max-width: 70%;
  &:last-child {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary};
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.xs} {
    max-width: 80%;
  }
`;
export const Item = styled.div`
  padding: 1em 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.secondary};
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h4`
  cursor: pointer;
`;
export const Text = styled.div<{ $isOpened: boolean }>`
  ${transition(0.6)};

  margin-top: ${({ $isOpened }) => ($isOpened ? "1em" : 0)};
  max-height: ${({ $isOpened }) => ($isOpened ? "100rem" : 0)};
  overflow: hidden;
  position: relative;
`;

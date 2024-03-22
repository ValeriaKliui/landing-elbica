import styled from "styled-components";

import { transition } from "@/shared";

export const Container = styled.div`
  ${transition()};
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  &:hover {
    box-shadow: none;
    border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  }
  @media ${({ theme: { deviceQueries } }) => deviceQueries.md} {
    padding: 1em;
  }
`;
export const LinkStyled = styled.a`
  align-self: flex-end;
  &::after {
    content: "→";
    margin-left: 1em;
  }
`;

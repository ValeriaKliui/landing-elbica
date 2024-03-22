import styled from "styled-components";

import { transition } from "..";

export const Circle = styled.div`
  ${transition()};
  background-color: #55aca6;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  &:hover {
    transform: scale(1.1);
  }
`;
export const IconContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";

export const Container = styled.div<{
  $top: number;
  $left: number;
}>`
  margin-bottom: ${({ $top }) => 2 * $top}px;
  margin-right: ${({ $left }) => 2.5 * $left}px;
`;

export const Border = styled.div<{
  $top: number;
  $maxWidth: number;
}>`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  margin-top: ${({ $top }) => $top / 2}px;
  position: relative;
  width: fit-content;
`;

export const Image = styled.img<{
  $top: number;
  $left: number;
  $isCascade: boolean;
}>`
  max-width: 100%;
  height: auto;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  position: relative;
  box-shadow: ${({ $left, $isCascade }) =>
      $isCascade ? -1.3 * $left : 1.3 * $left}px
    ${({ $top }) => -1.3 * $top}px
    ${({ theme: { colors } }) => colors.primary_light};
  z-index: -1;
`;

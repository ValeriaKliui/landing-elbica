import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 2em;
  width: 500px;
  height: 400px;
  margin-bottom: 8em;
`;
export const Border = styled.div<{
  $top: number;
  $left: number;
  $imgHeight: number;
  $isCascade: boolean;
}>`
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  top: ${({ $top, $isCascade }) => ($isCascade ? $top * 2 : $top / 2)}px;
  position: relative;
  z-index: 2;
  left: ${({ $left, $isCascade }) => $isCascade && 2 * $left}px;
  height: ${({ $imgHeight }) => $imgHeight}px;
`;
export const Image = styled.img<{
  $top: number;
  $left: number;
  $isCascade: boolean;
}>`
  position: absolute;
  box-shadow: ${({ $left, $isCascade }) => ($isCascade ? -$left : $left)}px
    ${({ $top }) => -$top}px ${({ theme: { colors } }) => colors.primary_light};
  top: ${(props) => props.$top}px;
  left: ${({ $left }) => $left}px;
  z-index: 0;
  width: 100%;
`;

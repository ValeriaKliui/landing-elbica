import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const TitleContainer = styled.div`
  padding: 0.5em 1em;
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
  width: fit-content;
`;
export const PointsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Point = styled.li`
  list-style-type: disc;
  &::marker {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

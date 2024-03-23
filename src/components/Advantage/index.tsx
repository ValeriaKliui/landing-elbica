import { Container, Point, PointsContainer, TitleContainer } from "./styled";

export const Advantage = ({ points, title }) => (
  <Container>
    <TitleContainer>
      <h4> {title}</h4>
    </TitleContainer>
    <PointsContainer>
      {points.map((point) => (
        <Point>{point}</Point>
      ))}
    </PointsContainer>
  </Container>
);

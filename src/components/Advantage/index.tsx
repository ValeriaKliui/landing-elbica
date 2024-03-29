import { FC } from "react";

import { AdvantageProps } from "./interfaces";
import { Container, Point, PointsContainer, TitleContainer } from "./styled";

export const Advantage: FC<AdvantageProps> = ({ points, title }) => (
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

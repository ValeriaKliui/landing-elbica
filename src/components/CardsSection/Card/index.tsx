import { FC } from "react";

import { CardProps } from "./interfaces";
import { Container, LinkStyled } from "./styled";

export const Card: FC<CardProps> = ({ title, text, Icon }) => (
  <Container>
    <Icon />
    <h4>{title}</h4>
    <p>{text}</p>
    <LinkStyled className="link">Подробнее</LinkStyled>
  </Container>
);

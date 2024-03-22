import { FC } from "react";

import { ServiceCardProps } from "./interfaces";
import { Container, LinkStyled } from "./styled";

export const ServiceCard: FC<ServiceCardProps> = ({ title, text, Icon }) => {
  return (
    <Container>
      <Icon />
      <h4>{title}</h4>
      <p>{text}</p>
      <LinkStyled className="link">Подробнее</LinkStyled>
    </Container>
  );
};

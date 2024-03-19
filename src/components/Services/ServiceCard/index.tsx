import { FC } from "react";

import { ServiceCardProps } from "./interfaces";
import { Container, Link } from "./styled";

export const ServiceCard: FC<ServiceCardProps> = ({ title, text, Icon }) => {
  return (
    <Container>
      <Icon />
      <h4>{title}</h4>
      <p>{text}</p>
      <Link className="link">Подробнее</Link>
    </Container>
  );
};

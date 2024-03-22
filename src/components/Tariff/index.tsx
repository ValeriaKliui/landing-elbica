import { FC } from "react";

import { Button } from "@/shared/Button";

import { TariffProps } from "./interfaces";
import { ButtonWrapper, Container, Icon, ItemContainer, Items } from "./styled";

export const Tariff: FC<TariffProps> = ({ items, color, title, price }) => (
  <Container>
    <h3 className="centered-text">{title}</h3>
    <Items>
      {items.map((text, index) => (
        <ItemContainer key={index}>
          <Icon $fill={color} />
          <p>{text}</p>
        </ItemContainer>
      ))}
    </Items>
    <p className="action-text">{price.toLocaleString()} руб.</p>
    <ButtonWrapper>
      <Button text={`Оставить заявку на ${title}`} />
    </ButtonWrapper>
  </Container>
);

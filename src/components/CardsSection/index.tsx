import classNames from "classnames";
import { FC } from "react";

import { Card } from "./Card";
import { CardsSectionProps } from "./interfaces";
import { CardsContainer } from "./styles";

export const CardsSection: FC<CardsSectionProps> = ({ title, items }) => (
  <section className={classNames("section", "wrapper")}>
    <h2 className="section-title">{title}</h2>
    <CardsContainer>
      {items.map(({ title, text, Icon }) => (
        <Card title={title} text={text} key={title} Icon={Icon} />
      ))}
    </CardsContainer>
  </section>
);

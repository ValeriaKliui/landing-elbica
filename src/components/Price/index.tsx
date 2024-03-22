import classNames from "classnames";

import { TARIFFS } from "@/constants";

import { Tariff } from "../Tariff";
import { Container } from "./styles";

export const Price = () => (
  <section className={classNames("section", "wrapper")}>
    <h2 className="section-title">Стоимость услуг</h2>
    <Container>
      {TARIFFS.map(({ title, color, items, price }) => (
        <Tariff
          title={title}
          color={color}
          items={items}
          key={title}
          price={price}
        />
      ))}
    </Container>
  </section>
);

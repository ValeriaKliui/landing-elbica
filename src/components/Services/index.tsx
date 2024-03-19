import classNames from "classnames";

import { SERVICES } from "@/constants";

import { ServiceCard } from "./ServiceCard";
import { ServicesContainer } from "./styles";

export const Services = () => (
  <section className={classNames("section", "wrapper")}>
    <h2 className="section-title">Каталог услуг</h2>
    <ServicesContainer>
      {SERVICES.map(({ title, text, Icon }) => (
        <ServiceCard title={title} text={text} key={title} Icon={Icon} />
      ))}
    </ServicesContainer>
  </section>
);

import { SERVICES } from "@/constants";

import { ServiceCard } from "./ServiceCard";
import { ServicesContainer } from "./styles";

export const Services = () => (
  <section className={["section", "wrapper"].join(" ")}>
    <h2 className="section-title">Каталог услуг</h2>
    <ServicesContainer>
      {SERVICES.map(({ title, text }) => (
        <ServiceCard title={title} text={text} key={title} />
      ))}
    </ServicesContainer>
  </section>
);

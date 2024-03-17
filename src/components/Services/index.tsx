import { SERVICES } from "@/constants/services";
import { ServiceCard } from "./ServiceCard";
import { ServicesContainer } from "./styles";

export const Services = () => (
  <section>
    <h2 className="centered-text">Кaталог услуг</h2>
    <ServicesContainer>
      {SERVICES.map(({ title, text }) => (
        <ServiceCard title={title} text={text} />
      ))}
    </ServicesContainer>
  </section>
);

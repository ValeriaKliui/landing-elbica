import GirslImg from "@assets/images/girls.png";

import { ADVANTAGES } from "@/constants";
import { DecoratedImg } from "@/shared/DecoratedImg";

import { AdvantagesList, Container, Section } from "./styled";

export const Advantages = () => {
  return (
    <Section className="section">
      <div className="wrapper">
        <h2 className="section-title">Преимущества</h2>
        <Container>
          <AdvantagesList>
            {ADVANTAGES.map(({ title, text }) => (
              <li key={title}>
                <h4> {title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </AdvantagesList>
          <DecoratedImg src={GirslImg} />
        </Container>
      </div>
    </Section>
  );
};

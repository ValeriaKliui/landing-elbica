import { DecoratedImg } from "@/shared/DecoratedImg";

import { Container } from "./styled";
import { OPPORTUNITIES } from "@/constants";
import { Opportunity } from "./Opportunity";

export const Opportuninities = () => {
  return (
    <section className={["section", "wrapper"].join(" ")}>
      <h2 className="section-title">Наши возможности</h2>
      <Container>
        {OPPORTUNITIES.map(({ title, text, options, img }) => (
          <Opportunity title={title} text={text} options={options} img={img} />
        ))}
      </Container>
    </section>
  );
};

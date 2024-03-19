import classNames from "classnames";

import { OPPORTUNITIES } from "@/constants";

import { Opportunity } from "./Opportunity";
import { Container } from "./styled";

export const Opportuninities = () => {
  return (
    <section className={classNames("section", "wrapper-s")}>
      <h2 className="section-title">Наши возможности</h2>
      <Container>
        {OPPORTUNITIES.map(({ title, text, options, img }, index) => (
          <Opportunity
            title={title}
            text={text}
            options={options}
            img={img}
            key={title}
            index={index}
          />
        ))}
      </Container>
    </section>
  );
};

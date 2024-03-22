import classNames from "classnames";

import { OPPORTUNITIES } from "@/constants";

import { Opportunity } from "./Opportunity";
import { Container } from "./styled";

export const GridSection = ({ title, id }) => (
  <section className={classNames("section", "wrapper-s")} id={id}>
    <h2 className="section-title">{title}</h2>
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

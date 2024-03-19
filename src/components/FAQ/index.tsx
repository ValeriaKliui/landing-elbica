import classNames from "classnames";

import { FAQItems } from "@/constants";

import { Accordeon } from "../Accordeon";
import { Section } from "./styled";

export const FAQ = () => (
  <Section className={classNames("section", "wrapper")}>
    <h2 className="section-title">Нас часто спрашивают</h2>
    <Accordeon items={FAQItems} />{" "}
  </Section>
);

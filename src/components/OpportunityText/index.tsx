import { FC } from "react";

import { OpportunityProps } from "./interfaces";
import { Container, OpportunityText, Option, Options } from "./styled";

export const Opportunity: FC<OpportunityProps> = ({ title, text, options }) => (
  <Container>
    <OpportunityText>
      <h3>{title}</h3>
      <p>{text}</p>
      <Options>
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Options>
    </OpportunityText>
  </Container>
);

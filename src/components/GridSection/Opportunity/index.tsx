import { FC } from "react";

import { DecoratedImg } from "@/shared/DecoratedImg";

import { OpportunityProps } from "./interfaces";
import { Container, OpportunityText, Option, Options } from "./styled";

export const Opportunity: FC<OpportunityProps> = ({
  title,
  text,
  options,
  img,
  index,
}) => {
  const isOdd = index % 2 === 0;

  return (
    <Container>
      <DecoratedImg src={img} isCascade={true} />

      <OpportunityText $isOdd={isOdd}>
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
};

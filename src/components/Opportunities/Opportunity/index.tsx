import { DecoratedImg } from "@/shared/DecoratedImg";
import { Option, Options, Container } from "./styled";

export const Opportunity = ({ title, text, options, img }) => {
  return (
    <Container>
      <DecoratedImg src={img} isCascade={true} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Options>
          {options.map((option) => (
            <Option>{option}</Option>
          ))}
        </Options>
      </div>
    </Container>
  );
};

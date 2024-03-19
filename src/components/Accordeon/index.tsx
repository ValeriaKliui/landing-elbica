import { FC, useState } from "react";

import { AccordeonProps } from "./interfaces";
import { Container, Item } from "./styled";

export const Accordeon: FC<AccordeonProps> = ({ items }) => {
  const [openedIndex, setOpenedIndex] = useState<null | number>(0);
  const toggle = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      {items.map(({ title, text }, index) => (
        <Item onClick={() => toggle(index)}>
          <h4>{title}</h4>
          {openedIndex === index && <p>{text}</p>}
        </Item>
      ))}
    </Container>
  );
};

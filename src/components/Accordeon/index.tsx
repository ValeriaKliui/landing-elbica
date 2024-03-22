import { FC, useState } from "react";

import { AccordeonProps } from "./interfaces";
import { Container, Item, Text, Title } from "./styled";

export const Accordeon: FC<AccordeonProps> = ({ items }) => {
  const [openedIndex, setOpenedIndex] = useState<null | number>(0);
  const toggle = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      {items.map(({ title, text }, index) => (
        <Item key={index}>
          <Title onClick={() => toggle(index)}>{title}</Title>
          <Text $isOpened={openedIndex === index}>{text}</Text>
        </Item>
      ))}
    </Container>
  );
};

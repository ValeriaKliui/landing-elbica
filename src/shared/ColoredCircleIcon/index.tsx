import { FC } from "react";
import { Circle, CircleIcon, IconContainer } from "./styles";

export const ColoredCircleIcon: FC = ({ src }) => {
  return (
    <Circle>
      <IconContainer>
        <CircleIcon src={src} />
      </IconContainer>
    </Circle>
  );
};

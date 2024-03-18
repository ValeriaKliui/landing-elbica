import { FC } from "react";
import { Link } from "react-router-dom";

import { ColoredCircleIconProps } from "./interfaces";
import { Circle, CircleIcon, IconContainer } from "./styles";

export const ColoredCircleIcon: FC<ColoredCircleIconProps> = ({
  src,
  link,
}) => {
  return (
    <Link to={link}>
      <Circle>
        <IconContainer>
          <CircleIcon src={src} />
        </IconContainer>
      </Circle>
    </Link>
  );
};

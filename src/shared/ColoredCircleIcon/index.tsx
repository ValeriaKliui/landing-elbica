import { FC } from "react";
import { Link } from "react-router-dom";

import { ColoredCircleIconProps } from "./interfaces";
import { Circle, IconContainer } from "./styles";

export const ColoredCircleIcon: FC<ColoredCircleIconProps> = ({
  Icon,
  link,
}) => (
  <Link to={link}>
    <Circle>
      <IconContainer>
        <Icon />
      </IconContainer>
    </Circle>
  </Link>
);

import { FC } from "react";

import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = ({ text, width }) => {
  return <ButtonStyled style={{ width }}>{text}</ButtonStyled>;
};

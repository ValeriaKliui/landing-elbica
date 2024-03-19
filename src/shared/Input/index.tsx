import { FC, InputHTMLAttributes } from "react";

import { InputStyled } from "./styled";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <InputStyled {...props} />
);

import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";

import { FormStyled, Subtext } from "./styled";

export const Form = () => (
  <FormStyled>
    <Input placeholder="Ваше имя" />
    <Input placeholder="Телефон" />
    <Button text="Отправить заявку" width="100%" />
    <Subtext className="subtext">
      Нажимая кнопку «Отправить» вы даёте своё согласие на обработку
      персональных данных
    </Subtext>
  </FormStyled>
);

import classNames from "classnames";

import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";

import { Container, Form, Section, Subtext, Text } from "./styled";

export const ContactForm = () => (
  <Section className={classNames("section", "wrapper-s")}>
    <Container>
      <Text>
        <h3>Мы ломаем стереотипы о бухгалтерии</h3>
        <p>
          Мы разрабатываем собственную, надежную и удобную для клиента систему.
        </p>
        <p>
          Запишитесь на бесплатную консультацию и мы ответим на все вопросы о
          наших услугах и предложим вариант решения вашей задачи.
        </p>
      </Text>
      <Form>
        <Input placeholder="Ваше имя" />
        <Input placeholder="Телефон" />
        <Button text="Отправить заявку" width="100%" />
        <Subtext className="subtext">
          Нажимая кнопку «Отправить» вы даёте своё согласие на обработку
          персональных данных
        </Subtext>
      </Form>
    </Container>
  </Section>
);

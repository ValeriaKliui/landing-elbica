import classNames from "classnames";

import { Form } from "../Form";
import { Container, Section, Text } from "./styled";

export const ContactForm = () => (
  <Section className={classNames("section", "wrapper-s")}>
    <Container>
      <Text className="centered-text">
        <h3>Мы ломаем стереотипы о бухгалтерии</h3>
        <p>
          Мы разрабатываем собственную, надежную и удобную для клиента систему.
        </p>
        <p>
          Запишитесь на бесплатную консультацию и мы ответим на все вопросы о
          наших услугах и предложим вариант решения вашей задачи.
        </p>
      </Text>
      <Form />
    </Container>
  </Section>
);

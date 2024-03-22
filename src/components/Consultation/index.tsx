import GirlImg from "@assets/images/girl-book.png";
import classNames from "classnames";

import { Form } from "../Form";
import { Container, FormContainer, Image, Section } from "./styled";

export const Consultation = () => (
  <Section className={classNames("section", "wrapper-s")}>
    <Container>
      <h3>Остались вопросы?</h3>
      <p className="centered-text">
        Запишитесь на бесплатную консультацию и мы ответим на все вопросы о
        наших услугах и предложим вариант решения вашей задачи
      </p>
      <FormContainer>
        <Image src={GirlImg} />
        <Form />
      </FormContainer>
    </Container>
  </Section>
);

import Girl from "@assets/images/girl-writes.png";
import { Link } from "react-router-dom";

import { Button } from "@/shared/Button";
import { DecoratedImg } from "@/shared/DecoratedImg";

import { Container, Links, SectionTitle, Text } from "./styled";

export const Consult = () => {
  return (
    <section className={["section", "wrapper"].join(" ")}>
      <Links>
        <Link to="#">Главная</Link>
        <Link to="#">Услуги</Link>
      </Links>
      <Container>
        <DecoratedImg src={Girl} />
        <Text>
          <SectionTitle>Бухгалтерские услуги для вашего бизнеса</SectionTitle>
          <p>
            БЮРО - это полноценная команда для решения всех ваших проблем в
            части бухгалтерии, налогов, отчетности, кадров и не только. Вас не
            обслуживает один человек, их минимум 4 на каждого клиента. И это
            позволяет мыслить масштабнее, решать поставленные задачи
            качественнее.
          </p>
          <Button text="Бесплатная консультация" />
        </Text>
      </Container>
    </section>
  );
};

import { Button } from "@/shared/Button";
import { DecoratedImg } from "@/shared/DecoratedImg";
import Girl from "@assets/images/girl-writes.png";
import { Container, Text } from "./styled";

export const Consult = () => {
  return (
    <Container>
      <DecoratedImg src={Girl} />
      <Text>
        <h2>Бухгалтерские услуги для вашего бизнеса</h2>
        <p>
          БЮРО - это полноценная команда для решения всех ваших проблем в части
          бухгалтерии, налогов, отчетности, кадров и не только. Вас не
          обслуживает один человек, их минимум 4 на каждого клиента. И это
          позволяет мыслить масштабнее, решать поставленные задачи качественнее.
        </p>
        <Button text="Бесплатная консультация" />
      </Text>
    </Container>
  );
};

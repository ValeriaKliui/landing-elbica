import Girl from "@assets/images/girl-writes.png";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { LINKS, PATHS } from "@/constants";
import { Button } from "@/shared/Button";
import { DecoratedImg } from "@/shared/DecoratedImg";

import { Container, Links, SectionTitle, Text } from "./styled";

export const AboutUs = () => {
  const paths = Object.entries(PATHS).map((path) => path[1]);

  return (
    <section className={classNames("section", "wrapper")} id={LINKS.COMPANY}>
      <Links>
        {paths.map(({ LINK, TITLE }) => (
          <NavLink
            to={LINK}
            key={LINK}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {TITLE}
          </NavLink>
        ))}
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

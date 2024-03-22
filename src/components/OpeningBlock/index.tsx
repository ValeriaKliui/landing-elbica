import classNames from "classnames";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import { LINKS, PATHS } from "@/constants";
import { Button } from "@/shared/Button";
import { DecoratedImg } from "@/shared/DecoratedImg";

import { OpeningBlockProps } from "./interfaces";
import { Container, Links, SectionTitle, Text } from "./styled";

export const OpeningBlock: FC<OpeningBlockProps> = ({
  blockTitle,
  blockText,
  blockImgSrc,
}) => {
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
        <DecoratedImg src={blockImgSrc} />
        <Text>
          <SectionTitle>{blockTitle}</SectionTitle>
          <p>{blockText}</p>
          <Button text="Бесплатная консультация" />
        </Text>
      </Container>
    </section>
  );
};

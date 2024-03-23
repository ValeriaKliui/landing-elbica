import { FC } from "react";

import { DecoratedImg } from "@/shared/DecoratedImg";

import { GridSectionProps } from "./interfaces";
import { Container, GridCell } from "./styled";

export const GridSection: FC<GridSectionProps<any>> = ({
  title,
  id,
  images,
  infoItems,
  Block,
}) => {
  return (
    <section className="section" id={id}>
      <div className="wrapper-s">
        <h2 className="section-title">{title}</h2>
        <Container>
          {infoItems.map((item, index) => (
            <>
              <GridCell>
                <DecoratedImg src={images[index]} />
              </GridCell>
              <GridCell>
                <Block {...item} />
              </GridCell>
            </>
          ))}
        </Container>
      </div>
    </section>
  );
};

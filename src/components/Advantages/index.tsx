import GirslImg from "@assets/images/girls.png";

import { ADVANTAGES } from "@/constants";
import { DecoratedImg } from "@/shared/DecoratedImg";

import {
  AdvantagesList,
  Container,
  IconContainer,
  ImageContainer,
  Item,
  Section,
} from "./styled";

export const Advantages = () => {
  return (
    <Section className="section">
      <div className="wrapper">
        <h2 className="section-title">Преимущества</h2>
        <Container>
          <AdvantagesList>
            {ADVANTAGES.map(({ title, text, Icon }) => (
              <Item key={title}>
                <IconContainer>
                  <Icon />
                </IconContainer>
                <div>
                  <h4> {title}</h4>
                  <p>{text}</p>
                </div>
              </Item>
            ))}
          </AdvantagesList>
          <ImageContainer>
            <DecoratedImg src={GirslImg} />
          </ImageContainer>
        </Container>
      </div>
    </Section>
  );
};
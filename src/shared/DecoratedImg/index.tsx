import { Container, Image, Border } from "./styles";

export const DecoratedImg = ({ src }) => {
  return (
    <Container>
      <Border />
      <Image src={src} />
    </Container>
  );
};

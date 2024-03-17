import { Container, Link } from "./styled";

export const ServiceCard = ({ title, text }) => {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{text}</p>
      <Link className="link">Подробнее</Link>
    </Container>
  );
};

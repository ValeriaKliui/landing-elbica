import { Logo } from "../Logo";
import { FooterContainer } from "./styles";

export const Footer = () => {
  const data = [
    ["12313, г. Минск, ул. Плотникова 9", "803349382423", "fgjkfg@gmaul.com"],
  ];
  const links = [
    [
      { title: "О компании", link: "#" },
      { title: "Услуги", link: "#" },
      { title: "Команда", link: "#" },
      { title: "Защита персональных данных", link: "#" },
    ],
    [
      { title: "Отзывы", link: "#" },
      { title: "Статьи", link: "#" },
      { title: "Контакты", link: "#" },
      { title: "Защита персональных данных", link: "#" },
    ],
  ];
  //     < ul >
  //     <li>{text}</li>
  // </ul >

  return (
    <FooterContainer>
      <div>
        <Logo />
        <p>© 2024 Все права защищены</p>
        <p>ИП Тимофеева Вера Леонидовна</p>
        <p>ИНН 2342342342343</p>
        <p>ОГРИНП 21324698</p>
      </div>
    </FooterContainer>
  );
};

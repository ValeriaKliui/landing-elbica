import { ContactIcons } from "@/shared/ContactIcons";
import { Logo } from "@/shared/Logo";
import { FooterContainer, List } from "./styles";

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
      { title: "Разработка сайта", link: "#" },
    ],
  ];

  return (
    <FooterContainer>
      <div>
        <Logo />
        <p>© 2024 Все права защищены</p>
        <p>ИП Тимофеева Вера Леонидовна</p>
        <p>ИНН 2342342342343</p>
        <p>ОГРИНП 21324698</p>
      </div>
      {data.map((section, index) => (
        <List key={index}>
          {section.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </List>
      ))}
      {links.map((section, index) => (
        <List key={index}>
          {section.map(({ link, title }) => (
            <li key={title}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </List>
      ))}
      <ContactIcons />
    </FooterContainer>
  );
};

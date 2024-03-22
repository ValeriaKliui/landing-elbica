import { FOOTER_DATA, FOOTER_LINKS, LINKS } from "@/constants";
import { ContactIcons } from "@/shared/ContactIcons";
import { Logo } from "@/shared/Logo";

import {
  CompanyData,
  CompanyInfo,
  FooterContainer,
  IconsWrapper,
  List,
} from "./styles";

export const Footer = () => (
  <FooterContainer className="wrapper" id={LINKS.CONTACTS}>
    <CompanyData>
      <Logo />
      <CompanyInfo>
        <p>© 2024 Все права защищены</p>
        <p>ИП Тимофеева Вера Леонидовна</p>
        <p>ИНН 2342342342343</p>
        <p>ОГРИНП 21324698</p>
      </CompanyInfo>
    </CompanyData>
    {FOOTER_DATA.map((section, index) => (
      <List key={index} $index={index}>
        {section.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </List>
    ))}
    {FOOTER_LINKS.map((section, index) => (
      <List key={index} $index={index}>
        {section.map(({ link, title }) => (
          <li key={title}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </List>
    ))}
    <IconsWrapper>
      <ContactIcons />
    </IconsWrapper>
  </FooterContainer>
);

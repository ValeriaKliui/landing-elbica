import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CONTACT_PHONE, devices } from "@/constants";
import { ContactIcons } from "@/shared/ContactIcons";
import { Logo } from "@/shared/Logo";

import { MobileMenu } from "../MobileMenu";
import { Nav } from "../Nav";
import {
  Burger,
  Contacts,
  ContactsText,
  HeaderContainer,
  IconsWrapper,
  NavWrapper,
} from "./styles";

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (width && width > devices.md && isOpened) setIsOpened(false);
  }, [width, isOpened]);

  const toggleMenu = () => setIsOpened((isOpened) => !isOpened);

  return (
    <HeaderContainer className="wrapper">
      <Logo />
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <Contacts $isOpened={isOpened}>
        <IconsWrapper>
          <ContactIcons />
        </IconsWrapper>
        <ContactsText>
          <Link to={`tel:${CONTACT_PHONE}`} className="link">
            {CONTACT_PHONE.toLocaleString()}
          </Link>
          <Link className="bold" to={`tel:${CONTACT_PHONE}`}>
            Заказать звонок
          </Link>
        </ContactsText>
      </Contacts>
      <Burger onClick={toggleMenu} $isOpened={isOpened}>
        {new Array(3).fill(1).map((_, index) => (
          <span key={index} className="burger-line" />
        ))}
      </Burger>
      <MobileMenu isOpened={isOpened}>
        <Nav />
      </MobileMenu>
    </HeaderContainer>
  );
};

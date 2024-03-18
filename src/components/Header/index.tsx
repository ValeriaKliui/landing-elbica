import { Link } from "react-router-dom";

import { CONTACT_PHONE } from "@/constants";
import { ContactIcons } from "@/shared/ContactIcons";
import { Logo } from "@/shared/Logo";

import { Nav } from "../Nav";
import { Contacts, ContactsText, HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer className="wrapper">
      <Logo />
      <Nav />
      <Contacts>
        <ContactIcons />
        <ContactsText>
          <Link to={`tel:${CONTACT_PHONE}`} className="link">
            {CONTACT_PHONE.toLocaleString()}
          </Link>
          <Link className="bold" to={`tel:${CONTACT_PHONE}`}>
            Заказать звонок
          </Link>
        </ContactsText>
      </Contacts>
    </HeaderContainer>
  );
};

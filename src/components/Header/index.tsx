import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import { Contacts, HeaderContainer, ContactsText, Icons } from "./styles";
import { Nav } from "../Nav";
import { ContactIcons } from "@/shared/ContactIcons";
import { Logo } from "@/shared/Logo";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <Contacts>
        <ContactIcons />
        <ContactsText>
          <Link to="tel:183289313123" className="link">
            8 029 322 15 86
          </Link>
          <p className="bold">Заказать звонок</p>
        </ContactsText>
      </Contacts>
    </HeaderContainer>
  );
};

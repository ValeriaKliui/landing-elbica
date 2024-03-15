import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import { Contacts, HeaderContainer, ContactsText, Icons } from "./styles";
import { Nav } from "../Nav";
import { Logo } from "../Logo";
import { ColoredCircleIcon } from "../../shared/ColoredCircleIcon";
import telegramIcon from "../../assets/icons/telegram.svg";
import phoneIcon from "../../assets/icons/phone.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <Contacts>
        <Icons>
          <ColoredCircleIcon src={telegramIcon} />
          <ColoredCircleIcon src={phoneIcon} />
        </Icons>
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

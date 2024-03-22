import { HashLink as Link } from "react-router-hash-link";

import { NAV_LINKS } from "../../constants";
import { NavContainer, NavList } from "./styles";

export const Nav = () => (
  <NavContainer>
    <NavList>
      {NAV_LINKS.map(({ link, title }) => (
        <li key={title}>
          <Link to={link} key={title} hrefLang={link}>
            {title}
          </Link>
        </li>
      ))}
    </NavList>
  </NavContainer>
);

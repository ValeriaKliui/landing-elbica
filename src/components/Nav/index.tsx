import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../constants";
import { NavContainer, NavList } from "./styles";

export const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        {NAV_LINKS.map(({ link, title }) => (
          <li>
            <Link to={link} key={title}>
              {title}
            </Link>
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
};

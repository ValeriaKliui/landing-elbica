import { Link } from "react-router-dom";

import { PATHS } from "@/constants";

import { LogoContainer, LogoText, Subtext } from "./styles";

export const Logo = () => (
  <Link to={PATHS.MAIN.LINK}>
    <LogoContainer>
      <LogoText>Эльбика</LogoText>
      <Subtext>бухгалтерское бюро</Subtext>
    </LogoContainer>
  </Link>
);

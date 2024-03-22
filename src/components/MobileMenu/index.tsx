import { FC, useEffect } from "react";

import { MobileMenuProps } from "./interfaces";
import { Container } from "./styles";

export const MobileMenu: FC<MobileMenuProps> = ({ isOpened, children }) => {
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpened]);

  return <Container $isOpened={isOpened}>{children}</Container>;
};

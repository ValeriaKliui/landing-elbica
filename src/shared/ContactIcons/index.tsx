import phoneIcon from "@assets/icons/phone.svg";
import telegramIcon from "@assets/icons/telegram.svg";

import { CONTACT_PHONE } from "@/constants";

import { ColoredCircleIcon } from "../ColoredCircleIcon";
import { Icons } from "./styles";

export const ContactIcons = () => {
  return (
    <Icons>
      <ColoredCircleIcon src={telegramIcon} link={`tel:${CONTACT_PHONE}`} />
      <ColoredCircleIcon src={phoneIcon} link={`tel:${CONTACT_PHONE}`} />
    </Icons>
  );
};

import PhoneIcon from "@assets/icons/phone.svg?react";
import TelegramIcon from "@assets/icons/telegram.svg?react";

import { CONTACT_PHONE } from "@/constants";

import { ColoredCircleIcon } from "../ColoredCircleIcon";
import { Icons } from "./styles";

export const ContactIcons = () => {
  return (
    <Icons>
      <ColoredCircleIcon Icon={TelegramIcon} link={`tel:${CONTACT_PHONE}`} />
      <ColoredCircleIcon Icon={PhoneIcon} link={`tel:${CONTACT_PHONE}`} />
    </Icons>
  );
};

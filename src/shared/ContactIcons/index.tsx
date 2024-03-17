import telegramIcon from "@assets/icons/telegram.svg";
import phoneIcon from "@assets/icons/phone.svg";
import { ColoredCircleIcon } from "../ColoredCircleIcon";
import { Icons } from "./styles";

export const ContactIcons = () => {
  return (
    <Icons>
      <ColoredCircleIcon src={telegramIcon} />
      <ColoredCircleIcon src={phoneIcon} />
    </Icons>
  );
};

import { SVG } from "@/types";

export interface CardInfo {
  title: string;
  text: string;
  Icon: SVG;
}
export interface CardsSectionProps {
  title: string;
  items: CardInfo[];
}

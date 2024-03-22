import GirlReadsDocs from "@/assets/images/girl-reads-docs.png";
import { CardsSection } from "@/components/CardsSection";
import { Consultation } from "@/components/Consultation";
import { OpeningBlock } from "@/components/OpeningBlock";
import { Price } from "@/components/Price";
import { BENEFITS_OOO } from "@/constants";

export const ServicePage = () => (
  <>
    <OpeningBlock
      blockTitle="Сопровождение ООО"
      blockText="БЮРО - это полноценная команда для решения всех ваших проблем в части бухгалтерии, налогов, отчетности, кадров и не только. Вас не обслуживает один человек, их минимум 4 на каждого клиента. И это позволяет мыслить масштабнее, решать поставленные задачи качественнее. "
      blockImgSrc={GirlReadsDocs}
    />
    <Price />
    <Consultation />
    <CardsSection title="Что получает ООО?" items={BENEFITS_OOO} />
  </>
);

import GirlReadsDocs from "@/assets/images/girl-reads-docs.png";
import { Advantage } from "@/components/Advantage";
import { CardsSection } from "@/components/CardsSection";
import { Consultation } from "@/components/Consultation";
import { GridSection } from "@/components/GridSection";
import { Guarantees } from "@/components/Guarantees";
import { OpeningBlock } from "@/components/OpeningBlock";
import { Price } from "@/components/Price";
import { BENEFITS_OOO, PLUSES_IMG, PLUSES_INFO } from "@/constants";

import { AdvantagesWrapper } from "./styled";

export const ServicePage = () => (
  <>
    <OpeningBlock
      blockTitle="Сопровождение ООО"
      blockText="БЮРО - это полноценная команда для решения всех ваших проблем в части бухгалтерии, налогов, отчетности, кадров и не только. Вас не обслуживает один человек, их минимум 4 на каждого клиента. И это позволяет мыслить масштабнее, решать поставленные задачи качественнее. "
      blockImgSrc={GirlReadsDocs}
    />
    <Price />
    <AdvantagesWrapper>
      <GridSection
        title="Плюсы бухгалтерии на аутсорсинге"
        images={PLUSES_IMG}
        infoItems={PLUSES_INFO}
        Block={(props) => <Advantage {...props} />}
      />
    </AdvantagesWrapper>
    <CardsSection title="Что получает ООО?" items={BENEFITS_OOO} />
    <Consultation />
    <Guarantees />
  </>
);

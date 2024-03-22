import GirlImgSrc from "@assets/images/girl-writes.png";

import { Advantages } from "@/components/Advantages";
import { CardsSection } from "@/components/CardsSection";
import { Consultation } from "@/components/Consultation";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { GridSection } from "@/components/GridSection";
import { Guarantees } from "@/components/Guarantees";
import { OpeningBlock } from "@/components/OpeningBlock";
import { LINKS, SERVICES } from "@/constants";

export const MainPage = () => (
  <>
    <OpeningBlock
      blockTitle="Бухгалтерские услуги для вашего бизнеса"
      blockText="БЮРО - это полноценная команда для решения всех ваших проблем в
            части бухгалтерии, налогов, отчетности, кадров и не только. Вас не
            обслуживает один человек, их минимум 4 на каждого клиента. И это
            позволяет мыслить масштабнее, решать поставленные задачи
            качественнее."
      blockImgSrc={GirlImgSrc}
    />
    <CardsSection title="Каталог услуг" items={SERVICES} />
    <Advantages />
    <GridSection title="Наши возможности" id={LINKS.OPPORTUNITIES} />
    <ContactForm />
    <FAQ />
    <Consultation />
    <Guarantees />
  </>
);

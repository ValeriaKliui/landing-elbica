import { AboutUs } from "@/components/AboutUs";
import { Advantages } from "@/components/Advantages";
import { Consultation } from "@/components/Consultation";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Guarantees } from "@/components/Guarantees";
import { Opportuninities } from "@/components/Opportunities";
import { Services } from "@/components/Services";

export const MainPage = () => {
  return (
    <>
      <AboutUs />
      <Services />
      <Advantages />
      <Opportuninities />
      <ContactForm />
      <FAQ />
      <Consultation />
      <Guarantees />
    </>
  );
};

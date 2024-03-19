import { Advantages } from "@/components/Advantages";
import { Consult } from "@/components/Consult";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Opportuninities } from "@/components/Opportunities";
import { Services } from "@/components/Services";

export const MainPage = () => {
  return (
    <>
      <Consult />
      <Services />
      <Advantages />
      <Opportuninities />
      <ContactForm />
      <FAQ />
    </>
  );
};

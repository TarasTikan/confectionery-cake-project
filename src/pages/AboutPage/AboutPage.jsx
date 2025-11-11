import { AboutHero } from "../../components/AboutHero/AboutHero";
import { FooterCake } from "../../components/footer/footer";
import { OrderCake } from "../../components/OrderAbout/OrderCake";
import { Values } from "../../components/Values/Values";

export const AboutPage = () => {
  return (
    <>
      <main>
        <AboutHero />
        <Values />
        <OrderCake />
      </main>
      <FooterCake />
    </>
  );
};

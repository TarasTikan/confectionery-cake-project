import { Hero } from "../../components/hero/hero";
import { Menu } from "../../components/menu/menu";
import { PopularDesserts } from "../../components/popularDesserts/popularDesserts";
import { Tastes } from "../../components/taste/taste";
import { CustomDesign } from "../../components/customDesign/customDesign";
import { ParticlesBg } from "../../components/background/ParticlesBackground";
import { WhyChooseUs } from "../../components/whyChooseUs/whyChooseUs";
import { OrderCake } from "../../components/OrderAbout/OrderCake";
import { FooterCake } from "../../components/footer/footer";
export const HomePage = () => {
  return (
    <>
      <ParticlesBg />
      <main>
        <Hero />
        <Menu />
        <PopularDesserts />
        <Tastes />
        <CustomDesign />
        <WhyChooseUs />
        <OrderCake />
      </main>
      <FooterCake />
    </>
  );
};

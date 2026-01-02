import { Hero } from "../../components/Hero/Hero";
import { Menu } from "../../components/Menu/Menu";
import { PopularDesserts } from "../../components/PopularDesserts/PopularDesserts";
import { Tastes } from "../../components/Taste/Taste";
import { CustomDesign } from "../../components/CustomDesign/CustomDesign";
import { ParticlesBg } from "../../components/Background/ParticlesBackground";
import { WhyChooseUs } from "../../components/WhyChooseUs/WhyChooseUs";
import { OrderCake } from "../../components/OrderAbout/OrderCake";
import { FooterCake } from "../../components/Footer/Footer";
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

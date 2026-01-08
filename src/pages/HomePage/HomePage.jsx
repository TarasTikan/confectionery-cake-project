import { Hero } from "../../components/Hero/Hero";
import { Menu } from "../../components/Menu/Menu";
import { PopularDesserts } from "../../components/PopularDesserts/PopularDesserts";
import { Tastes } from "../../components/Taste/Taste";
import { CustomDesign } from "../../components/CustomDesign/CustomDesign";
import { ParticlesBg } from "../../components/Background/ParticlesBackground";
import { WhyChooseUs } from "../../components/WhyChooseUs/WhyChooseUs";
import { OrderCake } from "../../components/OrderAbout/OrderCake";
import { FooterCake } from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/products/selectors";
import { Loader } from "../../components/Loader/Loader";
export const HomePage = () => {
  const loading = useSelector(getIsLoading)
  return (
    <>
      <ParticlesBg />
      <main>
        <Hero />
        <Menu />
        {loading ? <Loader /> : <PopularDesserts />}
        {loading ? <Loader text={"Завантажуємо смаки"}/> : <Tastes />}  
        <CustomDesign />
        <WhyChooseUs />
        <OrderCake />
      </main>
      <FooterCake />
    </>
  );
};

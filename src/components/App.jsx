import '../App.css';
import { SideBar } from './header/header';
import {Hero} from './hero/hero'
import {Menu} from './menu/menu'
import {PopularDesserts} from './popularDesserts/popularDesserts'
import {Tastes} from './taste/taste'
import {CustomDesign} from './customDesign/customDesign'
import {ParticlesBg } from './background/ParticlesBackground';
import {WhyChooseUs} from "./whyChooseUs/whyChooseUs"
import {OrderCake} from "./orderCake/orderCake"
import {FooterCake} from "./footer/footer"
function App() {
  return (
    <>
    <ParticlesBg/>
    <SideBar/>
    <main>
      <Hero/>
      <Menu/>
      <PopularDesserts/>
      <Tastes/>
      <CustomDesign/>
      <WhyChooseUs/>
      <OrderCake/>
    </main>
    <FooterCake/>
    </>
  );
}

export default App;

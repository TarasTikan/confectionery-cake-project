// import { SideBar } from '../components/header/header.jsx';
import {Hero} from '../../components/hero/hero'
import {Menu} from '../../components/menu/menu'
import {PopularDesserts} from '../../components/popularDesserts/popularDesserts'
import {Tastes} from '../../components/taste/taste'
import {CustomDesign} from '../../components/customDesign/customDesign'
import {ParticlesBg } from '../../components/background/ParticlesBackground';
import {WhyChooseUs} from "../../components/whyChooseUs/whyChooseUs"
import {OrderCake} from "../../components/orderCake/orderCake"
import {FooterCake} from "../../components/footer/footer"
export const HomePage = () => {
return(
    <>
  <ParticlesBg/>
    {/* <SideBar/> */}
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
)

}
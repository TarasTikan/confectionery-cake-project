import '../App.css';
import { SideBar } from './header/header';
import {Hero} from './hero/hero'
import {Menu} from './menu/menu'
import {PopularDesserts} from './popularDesserts/popularDesserts'
import {Tastes} from './taste/taste'
import {CustomDesign} from './customDesign/customDesign'
function App() {
  return (
    <>
    <SideBar/>
    <main>
      <Hero/>
      <Menu/>
      <PopularDesserts/>
      <Tastes/>
      <CustomDesign/>
    </main>
    </>
  );
}

export default App;

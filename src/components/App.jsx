import '../App.css';
import { SideBar } from './header/header';
import {Hero} from './hero/hero'
import {Menu} from './menu/menu'
import {PopularDesserts} from './popularDesserts/popularDesserts'
import {Tastes} from './taste/taste'
function App() {
  return (
    <>
    <SideBar/>
    <main>
      <Hero/>
      <Menu/>
      <PopularDesserts/>
      <Tastes/>
    </main>
    </>
  );
}

export default App;

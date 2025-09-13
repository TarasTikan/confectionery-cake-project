import '../App.css';
import { SideBar } from './header/header';
import {Hero} from './hero/hero'
import {Menu} from './menu/menu'
function App() {
  return (
    <>
    <SideBar/>
    <main>
      <Hero/>
      <Menu/>
    </main>
    </>
  );
}

export default App;

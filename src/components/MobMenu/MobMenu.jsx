import { NavLink } from "react-router-dom"
import { MobMenuContainer, MobMenuSection,MobMenuBtn } from "./MobMenu.styled"


export const MobMenu = ({ clouseMobMenu, open }) => {
     const handleClouse = () => {
    clouseMobMenu();
  };
    return (
             <MobMenuSection open={open}>

          <MobMenuContainer>
            <div >
          <button type="button" onClick={handleClouse}>
          x
          </button>

          <nav>
            <ul>
              <li>
                        <NavLink to="/">Головна</NavLink>
                      </li>
                      <li>
                        <NavLink to="/menu">Меню</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">Про нас</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Контакти</NavLink>
                      </li>
            </ul>
          </nav>
          </div>
          <MobMenuBtn>Замовити зараз</MobMenuBtn>
        
        
        </MobMenuContainer>  


        </MobMenuSection>
  
    )
}
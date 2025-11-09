import { NavLink } from "react-router-dom"
import { MobMenuContainer, MobMenuSection } from "./MobMenu.styled"


export const MobMenu = ({ clouseModal, open }) => {
     const handleClouse = () => {
    clouseModal();
  };
    return (
             <MobMenuSection open={open}>

          <MobMenuContainer>
            <div class="mob__menu__container">
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
        <button type="button">Замовити зараз</button>
        </MobMenuContainer>  


        </MobMenuSection>
  
    )
}
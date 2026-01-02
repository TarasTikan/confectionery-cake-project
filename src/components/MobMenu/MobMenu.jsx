import { useSelector } from "react-redux";
import {
  MobMenuContainer,
  MobMenuSection,
  MobMenuBtn,
  MobMenuList,
  NavLink,
  BtnHeaderClouse,
  Backdrop,
  NavLinkAuth,
  WrapperAuth,
  Separator,
} from "./MobMenu.styled";
import { getCartItems } from "../../redux/cart/selectors";
import { selectAuthUser } from "../../redux/auth/selectors";

export const MobMenu = ({ clouseMobMenu, open }) => {
  const cart = useSelector(getCartItems);
  const isAuth = useSelector(selectAuthUser);
  const handleClouse = () => {
    clouseMobMenu();
  };
  console.log(isAuth);
  return (
    <Backdrop open={open} onClick={handleClouse}>
      <MobMenuSection open={open}>
        <MobMenuContainer>
          <div>
            <BtnHeaderClouse type="button" onClick={handleClouse}>
              x
            </BtnHeaderClouse>

            <nav>
              <MobMenuList>
                <li>
                  <NavLink to="/" onClick={handleClouse}>
                    Головна
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu" onClick={handleClouse}>
                    Меню
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleClouse}>
                    Про нас
                  </NavLink>
                </li>
              </MobMenuList>
            </nav>
          </div>
          {!isAuth && (
            <WrapperAuth>
              <NavLinkAuth to="/register">Зареєструватися</NavLinkAuth>
              <Separator>|</Separator>
              <NavLinkAuth to="/login">Увійти</NavLinkAuth>
            </WrapperAuth>
          )}

          <MobMenuBtn to={cart.length === 0 ? "/menu" : "/order"}>
            Замовити зараз
          </MobMenuBtn>
        </MobMenuContainer>
      </MobMenuSection>
    </Backdrop>
  );
};

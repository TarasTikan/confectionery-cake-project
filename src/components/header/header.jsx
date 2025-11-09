import {
  Header,
  Container,
  NavList,
  Logo,
  NavLink,
  BtnHeader,
  BtnBasket,
  BtnMobMenu,
} from "./header.styled";
import { ShopBascetIcon } from "../../icons/shopBascetIcon";
import { MobMenuIcon } from "../../icons/mobMenuIcon";
import { Outlet } from "react-router-dom";
export const SideBar = () => {
  return (
    <>
    <Header>
      <Container>
        <BtnMobMenu>
          <MobMenuIcon />
        </BtnMobMenu>
        <Logo href="/">Кондитерська</Logo>
        <nav>
          <NavList>
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
          </NavList>
        </nav>
        <BtnHeader type="button">Замовити зараз</BtnHeader>
        <BtnBasket href="0">
          <ShopBascetIcon />
        </BtnBasket>
      </Container>
    </Header>
    <Outlet />
</>
  );
};

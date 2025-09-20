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
export const SideBar = () => {
  return (
    <Header>
      <Container>
        <BtnMobMenu>
          <MobMenuIcon />
        </BtnMobMenu>
        <Logo href="/">Кондитерська</Logo>
        <nav>
          <NavList>
            <li>
              <NavLink href="/">Головна</NavLink>
            </li>
            <li>
              <NavLink href="/">Меню</NavLink>
            </li>
            <li>
              <NavLink href="/">Про нас</NavLink>
            </li>
            <li>
              <NavLink href="/">контакти</NavLink>
            </li>
          </NavList>
        </nav>
        <BtnHeader type="button">Замовити зараз</BtnHeader>
        <BtnBasket href="0">
          <ShopBascetIcon />
        </BtnBasket>
      </Container>
    </Header>
  );
};

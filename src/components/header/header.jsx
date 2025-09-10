import { Header, Container, NavList, Logo, NavLink, BtnHeader, BtnBasket } from "./header.styled";
import {ShopBascetIcon} from '../../icons/shopBascetIcon'
export const SideBar = () => {
  return (
    <Header>
      <Container>
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
        <BtnBasket href="0"><ShopBascetIcon/></BtnBasket>
      </Container>
    </Header>
  );
};

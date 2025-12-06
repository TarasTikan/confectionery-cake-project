import {
  Header,
  Container,
  NavList,
  Logo,
  NavLink,
  BtnHeader,
  BtnBasket,
  BtnMobMenu,
  BasketCount,
} from "./header.styled";
import { ShopBascetIcon } from "../../icons/shopBascetIcon";
import { MobMenuIcon } from "../../icons/mobMenuIcon";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { MobMenu } from "../MobMenu/MobMenu";
import { useSelector } from "react-redux";
import { getCartItems } from "../../redux/selectors";
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(getCartItems);
  const handleMobMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const countCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  return (
    <>
      <Header>
        <Container>
          <BtnMobMenu onClick={handleMobMenuClick} type="button">
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
            </NavList>
          </nav>
          <BtnHeader type="button">Замовити зараз</BtnHeader>
          <BtnBasket type="button">
            <ShopBascetIcon />
            <BasketCount
              active={countCartItems === 0 ? undefined : cart.length}
            >
              {countCartItems}
            </BasketCount>
          </BtnBasket>
        </Container>
        <MobMenu open={isOpen} clouseMobMenu={handleMobMenuClick} />
      </Header>
      <Outlet />
    </>
  );
};

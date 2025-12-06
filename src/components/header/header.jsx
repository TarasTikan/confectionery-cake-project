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
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, openCartItems } from "../../redux/selectors";
import { toggleCart } from "../../redux/cartSlice";
import { ModalCart } from "../modalCart/modalCart";
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(getCartItems);
    const isOpenCart = useSelector(openCartItems)
    const dispatch = useDispatch();
  const handleMobMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
  const countCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    if (isOpen || isOpenCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen,isOpenCart]);
   

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
          <BtnHeader to="/menu">Замовити зараз</BtnHeader>
          <BtnBasket type="button" onClick={handleToggleHover}>
            <ShopBascetIcon />
            <BasketCount
              active={countCartItems === 0 ? undefined : cart.length}
            >
              {countCartItems}
            </BasketCount>
          </BtnBasket>
        </Container>
        <MobMenu open={isOpen} clouseMobMenu={handleMobMenuClick} />
        <ModalCart/>
      </Header>
      <Outlet />
    </>
  );
};

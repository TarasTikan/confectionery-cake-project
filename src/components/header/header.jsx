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
  NavLinkAuth,
  WrapperAuth,
  Separator,
  UserWrap,
  GreetingText,
  LogoutText,
} from "./Header.styled";
import { ShopBascetIcon } from "../../icons/shopBascetIcon";
import { MobMenuIcon } from "../../icons/mobMenuIcon";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { MobMenu } from "../MobMenu/MobMenu";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, openCartItems } from "../../redux/cart/selectors";
import { ModalCart } from "../ModalCart/ModalCart";
import { selectAuthUser } from "../../redux/auth/selectors";
import { UserIcon } from "../../icons/userIcon";
import { logoutUser } from "../../redux/auth/operations";
import { resetCart, toggleCart } from "../../redux/cart/cartSlice";
export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(getCartItems);
  const isOpenCart = useSelector(openCartItems);
  const isUser = useSelector(selectAuthUser);
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
  }, [isOpen, isOpenCart]);
  const handleLogout = () => {
   dispatch(logoutUser());
dispatch(resetCart())

  }
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
          <BtnHeader to={cart.length === 0 ? "/menu" : "/order"}>
            Замовити зараз
          </BtnHeader>
          <BtnBasket type="button" onClick={handleToggleHover}>
            <ShopBascetIcon />
            <BasketCount
              active={countCartItems === 0 ? undefined : cart.length}
            >
              {countCartItems}
            </BasketCount>
          </BtnBasket>
          {!isUser ? <WrapperAuth>
            <NavLinkAuth to="/register">Зареєструватися</NavLinkAuth>
            <Separator>|</Separator>
            <NavLinkAuth to="/login">Увійти</NavLinkAuth>
          </WrapperAuth> : <UserWrap><UserIcon /><GreetingText>Привіт, <span>{isUser?.user_metadata.name}</span></GreetingText><Separator>|</Separator><LogoutText type="button" onClick={handleLogout}>Вийти</LogoutText></UserWrap>}
 
        </Container>
        <MobMenu open={isOpen} clouseMobMenu={handleMobMenuClick} />
        <ModalCart />
      </Header>
      <Outlet />
    </>
  );
};

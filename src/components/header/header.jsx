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
import { MobMenu } from "../MobMenu/MobMenu";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/cart/selectors";
import { ModalCart } from "../ModalCart/ModalCart";
import { selectAuthUser } from "../../redux/auth/selectors";
import { UserIcon } from "../../icons/userIcon";
import { logoutUser } from "../../redux/auth/operations";
import { resetCart } from "../../redux/cart/cartSlice";
import { useCartActions } from "../../hooks/useCartActions";
import { useToggleMobMenu } from "../../hooks/useToggleMobMenu";
export const SideBar = () => {
  const cart = useSelector(getCartItems);
  const isUser = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const { toggleCartModal } = useCartActions();
  const { toggle, isOpen, close } = useToggleMobMenu();

  const countCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(resetCart());
  };
  return (
    <>
      <Header>
        <Container>
          <BtnMobMenu onClick={toggle} type="button">
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
          <BtnBasket type="button" onClick={toggleCartModal}>
            <ShopBascetIcon />
            <BasketCount
              active={countCartItems === 0 ? undefined : cart.length}
            >
              {countCartItems}
            </BasketCount>
          </BtnBasket>
          {!isUser ? (
            <WrapperAuth>
              <NavLinkAuth to="/register">Зареєструватися</NavLinkAuth>
              <Separator>|</Separator>
              <NavLinkAuth to="/login">Увійти</NavLinkAuth>
            </WrapperAuth>
          ) : (
            <UserWrap>
              <UserIcon />
              <GreetingText>
                Привіт, <span>{isUser?.user_metadata.name}</span>
              </GreetingText>
              <Separator>|</Separator>
              <LogoutText type="button" onClick={handleLogout}>
                Вийти
              </LogoutText>
            </UserWrap>
          )}
        </Container>
        <MobMenu open={isOpen} clouseMobMenu={close} />
        <ModalCart />
      </Header>
      <Outlet />
    </>
  );
};

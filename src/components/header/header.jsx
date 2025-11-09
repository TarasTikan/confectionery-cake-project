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
import { useState,useEffect } from "react";
import { MobMenu } from "../MobMenu/MobMenu";
export const SideBar = () => {
 const [isOpen, setIsOpen] = useState(false);
  const handleMobMenuClick = () => {
    setIsOpen(!isOpen);
  }

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
          <MobMenuIcon/>
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
      <MobMenu open={isOpen} clouseMobMenu={handleMobMenuClick}/>
    </Header>
    <Outlet />
</>
  );
};

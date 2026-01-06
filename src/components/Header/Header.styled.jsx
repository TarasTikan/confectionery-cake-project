import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";
export const Header = styled.header`
  font-family: "Inter", sans-serif;

  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 400px) {
    width: 400px;
  }
  @media screen and (min-width: 600px) {
    width: 600px;
  }
  @media screen and (min-width: 800px) {
    width: 800px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Logo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: #9b6bce;
  text-decoration: none;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
    margin-right: auto;
    margin-left: 0;
  }
`;

export const NavList = styled.ul`
  display: none;
  gap: 20px;
  align-items: center;
  list-style: none;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const NavLink = styled(RouterNavLink)`
  font-size: 14px; /* мобілка */
  font-weight: 500;
  color: #2e2e2e;
  text-decoration: none;
  padding: 10px 0;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #9b6bce;
  }

  @media screen and (min-width: 600px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 20px 0; /* більше простору */
  }
`;
export const BtnHeader = styled(RouterNavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 30px;
  border: none;
  background-color: #9b6bce;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  margin-right: 15px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  display: none;
  &:hover {
    background-color: #643a99ff;
    color: #fff;
  }

  @media screen and (min-width: 600px) {
    font-size: 15px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 28px;
    display: block;
  }
`;

export const BtnBasket = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 15px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    fill: #fff;
    background-color: #9b6bce;
    p {
      background-color: #fff;
      color: #9b6bce;
    }
  }

  @media screen and (min-width: 600px) {
    width: 55px;
    height: 55px;
    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const BtnMobMenu = styled.button`
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    fill: #fff;
    background-color: #9b6bce;
  }

  @media screen and (min-width: 600px) {
    width: 55px;
    height: 55px;
    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    svg {
      width: 25px;
      height: 25px;
    }
    display: none;
  }
`;

export const BasketCount = styled.p`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #9b6bce;
  color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 9px;
  font-weight: 600;
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const NavLinkAuth = styled(RouterNavLink)`
  font-size: 10px;
  font-weight: 500;
  color: #9b6bce;
  text-decoration: none;
  padding: 10px 0;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  display: none;

  &:hover {
    color: #643a99ff;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 20px 0;
    display: block;
  }
`;

export const WrapperAuth = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  svg {
    width: 33px;
    height: 33px;
    stroke: #000000;
    cursor: pointer;
  }
`;

export const Separator = styled.p`
  color: #9b6bce;
  display: none;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 4px 8px;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);


  @media screen and (min-width: 1200px) {
    padding: 10px 18px;
  }

  svg {
  heigh: 20px;
  width: 20px;
  @media screen and (min-width: 400px) {
    heigh: 25px;
 width: 25px;
 }
    @media screen and (min-width: 600px) {
     heigh: 30px;
  width: 30px;
  }

  }
`;

export const GreetingText = styled.p`
  margin: 0;
  color: #3a3a3a;
  font-weight: 500;
  line-height: 1.2;
  display: none;

  span {
    font-weight: 600;
    color: #d16c8f;
    white-space: nowrap;
  }


  @media screen and (min-width: 600px) {
    font-size: 13px;

  }

  @media screen and (min-width: 1200px) {
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;

export const LogoutText = styled.button`
  border: none;
  background: transparent;

  cursor: pointer;
  font-weight: 600;
  line-height: 1.2;

  color: #ff4d4f;
  padding: 4px 6px;
  border-radius: 10px;

  transition: transform 120ms ease, background 120ms ease, opacity 120ms ease;

    font-size: 10px;
  


  @media screen and (min-width: 400px) {
    font-size: 13px;

  }


  @media screen and (min-width: 600px) {
    font-size: 14px;

  }


  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }

  &:hover {
    background: rgba(255, 77, 79, 0.10);
  }

  &:active {
    transform: scale(0.98);
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid rgba(209, 108, 143, 0.45);
    outline-offset: 2px;
  }
`;
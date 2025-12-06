import styled from "@emotion/styled";
import { NavLink as RouterNavLink } from "react-router-dom";
export const Header = styled.header`
  font-family: "Inter", sans-serif;
  padding-top: 15px;
  padding-bottom: 20px;
  @media screen and (min-width: 600px) {
    padding-top: 20px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 25px;
    padding-bottom: 50px;
  }
`;
export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  display: none; /* мобілка */
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
export const BtnHeader = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 30px;
  border: none;
  background-color: #9b6bce;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  margin-right: 10px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  display: none;
  &:hover {
    background-color: #643a99ff;
      color: #fff;
  }

  @media screen and (min-width: 600px) {
    font-size: 15px;
    padding: 10px 20px;
    margin-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 28px;
    margin-right: 20px;
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
  display: ${props => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Footer = styled(motion.create("footer"))`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #f7f3ff;
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
  @media screen and (min-width: 800px) {
    width: 800px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    justify-content: space-around;
    flex-direction: row;
    gap: 0;
  }
`;

export const FooterLogo = styled.a`
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: #2b1f1f;
  text-decoration: none;
  @media screen and (min-width: 400px) {
    font-size: 28px;
  }
  @media screen and (min-width: 600px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 40px;
  }
`;
export const FooterNavTitle = styled.h4`
  font-weight: 700;
  color: #2b1f1f;
  text-transform: none;
  letter-spacing: -0.005em;
  @media screen and (min-width: 400px) {
    font-size: 17px;
  }
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 25px;
  }
`;

export const FooterNavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;
export const NavLink = styled(RouterNavLink)`
  display: inline-block;
  text-decoration: none;
  color: #2b1f1f;
  font-weight: 600;
  @media screen and (min-width: 400px) {
    font-size: 15.5px;
  }
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 17px;
  }

  transition: color 0.2s ease, transform 0.2s ease;
  &:hover {
    color: #7a4cf5;
    transform: translateX(2px);
  }
`;

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 600px) {
    gap: 18px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0;
    text-align: left;
    gap: 20px;
  }
`;

export const Phone = styled.a`
  display: flex;
  align-items: center;

  color: #2b1f1f;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease, transform 0.2s ease;
  @media screen and (min-width: 400px) {
    font-size: 17px;
  }
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }

  &:hover {
    color: #7a4cf5;
  }
`;

export const SocLinkFooter = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px 20px;
  gap: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 0 auto;
  background: ${({ variant }) =>
    variant === "telegram"
      ? "#2AABEE"
      : variant === "viber"
      ? "linear-gradient(90deg, #8f5db7 0%, #9c27b0 100%)"
      : "#ff9900"};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const SocLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 600px) {
    gap: 12px;
  }
`;

export const Copyright = styled.p`
  margin-top: 15px;
  color: #2b1f1f;
  font-weight: 600;

  font-size: 13px;
  @media (min-width: 400px) {
    font-size: 13.5px;
  }
  @media (min-width: 600px) {
    font-size: 14px;
    display: none;
  }
  @media (min-width: 1200px) {
    font-size: 15px;
    display: block;
  }
`;

export const WrapSocList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 13px;
  margin: 0 auto;
  @media (min-width: 1200px) {
    margin: 0;
    gap: 20px;
    align-items: start;
  }
`;
export const WrapLinkSoc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const LinkSoc = styled.a`
  padding: 7px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  background-image: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  &:last-child {
    background-image: linear-gradient(#1877f2);
  }
  border-radius: 10px;
  svg {
    fill: #ffff;
    height: 20px;
    width: 20px;
    @media (min-width: 600px) {
      height: 25px;
      width: 25px;
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 600px) {
    padding: 10px;
  }
`;

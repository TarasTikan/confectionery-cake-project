import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Footer = styled(motion.footer)`
  padding: 60px 20px;
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  flex-direction: column;
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
     justify-content: space-around;
       flex-direction: row;
  }
`;

export const FooterLogo = styled.a`
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: #2B1F1F;
  text-decoration: none;
  font-size: 24px;                     /* 320 */
  @media screen and (min-width: 400px) { font-size: 28px; }
  @media screen and (min-width: 600px) { font-size: 32px; }
  @media screen and (min-width: 1200px) { font-size: 40px; }
`
export const FooterNavTitle = styled.h4`
  font-weight: 700;
  color: #2B1F1F;
  text-transform: none;
  letter-spacing: -0.005em;

  font-size: 16px;                     /* 320 */
  @media screen and (min-width: 400px) { font-size: 17px; }
 @media screen and (min-width: 600px) { font-size: 18px; }
   @media screen and (min-width: 1200px) { font-size: 20px; }
`;

export const FooterNavList = styled.ul`
display: flex;
  justify-content: center;
  gap: 10px;
 flex-direction: column;
`
export const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #2B1F1F;
  font-weight: 600;

  font-size: 15px;                    /* 320 */
  @media screen and (min-width: 400px)  { font-size: 15.5px; }
  @media screen and (min-width: 600px)  { font-size: 16px; }
  @media screen and (min-width: 1200px) { font-size: 17px; }

  transition: color .2s ease, transform .2s ease;
  &:hover { color: #7A4CF5; transform: translateX(2px); }
`

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 600px) { gap: 18px; }
  @media screen and (min-width: 1200px) { gap: 20px; }
`;

export const Phone = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #2B1F1F;
  text-decoration: none;
  font-weight: 600;
transition: color .2s ease, transform .2s ease;
  font-size: 16px;                    /* 320 */
  @media screen and (min-width: 400px)  { font-size: 17px; }
  @media screen and (min-width: 600px)  { font-size: 18px; }
  @media screen and (min-width: 1200px) { font-size: 22px; }

  &:hover { color: #7A4CF5; }
`;
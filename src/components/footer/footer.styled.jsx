import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Footer = styled(motion.footer)`
  padding: 60px 20px;
  background-color: #F7F3FF;
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  gap: 40px;
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
       gap: 0;
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
   @media screen and (min-width: 1200px) { font-size: 25px; }
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
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 600px) { gap: 18px; }
  @media screen and (min-width: 1200px) { 
  margin: 0;
  text-align: left;
  gap: 20px; }
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

export const SocLinkFooter = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px 20px;
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

  @media (min-width: 600px) {
    width: 70%;
    font-size: 14px;
  }
    
    @media (min-width: 1200px) {
    width: 50%;
  margin: 0;
  }
  `

  export const SocLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 600px) {
    gap: 12px;
    }
  `

  export const Copyright = styled.p`
  margin-top: 15px;
  color: #2B1F1F;
  font-weight: 600;

  font-size: 13px;                    
  @media (min-width: 400px)  { font-size: 13.5px; }
  @media (min-width: 600px)  { font-size: 14px; }
  @media (min-width: 1200px) { font-size: 15px; }
`;
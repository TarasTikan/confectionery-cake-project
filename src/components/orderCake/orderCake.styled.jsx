import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const OrderCakeSection = styled(motion.section)`
  padding: 20px 20px;
  text-align: center;
  color: #2b2b2b;

  @media (min-width: 600px) {
    padding: 80px 40px;
  }

  @media (min-width: 1200px) {
    padding: 100px 80px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
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
     justify-content: center;
  }
`;


export const TitleOrder = styled.h2`
  font-weight: 700;
  color: #2b2b2b;
  font-size: 24px;
  margin-bottom: 12px;

  @media (min-width: 400px) {
    font-size: 28px;
  }

  @media (min-width: 600px) {
    font-size: 36px;
  }

  @media (min-width: 1200px) {
    font-size: 44px;
  }
`;

export const ListSocOrder = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  @media (min-width: 600px) {
   gap: 20px;
  }

`
export const SocLinkOrder = styled.a`
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
    width: auto;
    font-size: 16px;
    padding: 14px 26px;
  }`


export const CakeImage = styled.img`
  width: 340px;
  display: block;
  margin: 0 auto;
  filter: drop-shadow(0 18px 25px rgba(0, 0, 0, 0.25))
          drop-shadow(0 5px 8px rgba(0, 0, 0, 0.15));

  @media (max-width: 1200px) {
    width: 300px;
    filter: drop-shadow(0 14px 18px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 600px) {
    width: 230px;
    filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.18));
  }

  @media (max-width: 400px) {
    width: 190px;
    filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.15));
  }
`;

export const OrderText = styled.p`
  color: #3a3a3a;
  font-size: 14px;
  line-height: 1.6;
  @media (min-width: 400px) {
    font-size: 16px;
  }

  @media (min-width: 600px) {
    font-size: 18px;
  }
`

import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const MenuSection = styled.section`
  padding-top: 100px;
  padding-bottom: 70px;
`;

export const Container = styled.div`
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
  }
`;

export const MenuTitle = styled(motion.h2)`
  font-family: "Inter", sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #2e2e2e;

  @media screen and (min-width: 600px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`;

export const MenuList = styled.ul`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const MenuCard = styled(motion.li)`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
  &:hover button {
    background: #9b6bce;
    color: #fff;
    border-color: #9b6bce;
  }
`;

export const MenuCardImage = styled.img`
  display: block;
  width: 270px;
  height: auto;
  object-fit: cover;
`;

export const MenuName = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #2e2e2e;
  text-decoration: none;
  @media screen and (min-width: 600px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;

export const MenuBtn = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #2e2e2e;
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 150px;
`;

export const WrapInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px;
`;

import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const COLORS = {
  bgTop: "#ffffff",
  bgBottom: "#f8eaff",
  cardBg: "#ffffff",
  cardAccent: "#ffeefd",
  accent: "#a663cc",
  accentSoft: "#d199ff",
  textMain: "#1a1a1a",
  textMuted: "#4a4a4a",
  borderSoft: "#f5ccff",
};

/* -------- Секція категорії (фон, відступи) -------- */
export const CategorySection = styled.section`
  width: 100%;
  padding-bottom: 60px;
  background: linear-gradient(
    180deg,
    ${COLORS.bgTop} 0%,
    ${COLORS.bgBottom} 100%
  );
`;

/* -------- Контейнер -------- */
/* Ширина під 300 / 400 / 600 / 1200 */
export const CategoryContainer = styled.div`
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

/* -------- Заголовок «Торти» -------- */
export const CategoryTitle = styled(motion.h1)`
  font-size: 42px;
  font-weight: 800;
  color: ${COLORS.textMain};
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 400px) {
    font-size: 46px;
  }

  @media (min-width: 600px) {
    font-size: 52px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
  }
`;

export const CakesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 20px;
`;

export const CakeCard = styled.li`
  background-color: ${COLORS.cardBg};
  border-radius: 28px;
  border: 1px solid ${COLORS.borderSoft};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 250px;
  transition: transform 0.3s ease;
  cursor: pointer;
  width: calc((100% - 30px) / 2);
  flex-grow: 1;

  @media (min-width: 600px) {
    width: calc((100% - 30px) / 3);
    flex-grow: 2;
  }

  @media (min-width: 1200px) {
    width: calc((100% - 30px) / 4);
    flex-grow: 3;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

`;

export const CakeImage = styled.img`
  display: block;
  height: 140px;
  object-fit: cover;
  width: 100%;
  @media (min-width: 400px) {
    height: 190px;
  }
  @media (min-width: 600px) {
    height: 250px;
  }
`;

export const WrapCakeInfo = styled.div`
  padding: 18px 18px 22px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CakeName = styled(NavLink)`
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
  color: ${COLORS.textMain};
  margin-bottom: 8px;
  transition: color 0.3s ease;
  @media (min-width: 400px) {
    font-size: 15px;
  }

  @media (min-width: 600px) {
    font-size: 20px;
  }

  &:hover {
    color: ${COLORS.accent};
  }
`;

export const CakePrice = styled.p`
  font-size: 12px;
  color: ${COLORS.textMuted};
  margin-bottom: 10px;

  @media (min-width: 400px) {
    font-size: 15px;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

export const BuyButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 8px;
  font-weight: 600;
  color: #fff;
  background: #9b6bce;
  border: none;
  border-radius: 12px;
  padding: 8px 15px;
  cursor: pointer;
  transition: background 0.3s ease;

  @media (min-width: 400px) {
    font-size: 12px;
    padding: 10px 18px;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }

   &:hover {
    background-color: #643a99ff;
  }
`;

export const CategoryFilterBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  @media (max-width: 599px) {
    justify-content: center;
  }

  @media (min-width: 600px) {
    gap: 12px;
  }

  @media (min-width: 1200px) {
    gap: 14px;
  }
`;

export const CategoryFilterLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  @media (min-width: 400px) {
    font-size: 15px;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;
export const CategoryFilterItem = styled.li`
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 14px;
  border: 1px solid ${COLORS.chipBorder};
  background-color: ${({ active }) =>
    active === "true" ? COLORS.accentSoft : "#ffffff"};
  color: ${({ active }) => (active === "true" ? "#ffffff" : COLORS.textMain)};
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.25s ease, color 0.25s ease,
    box-shadow 0.25s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(166, 99, 204, 0.25);
    transform: translateY(-1px);
  }

  @media (min-width: 400px) {
    padding: 9px 20px;
    font-size: 15px;
  }

  @media (min-width: 600px) {
    padding: 10px 22px;
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    padding: 10px 24px;
  }
`;

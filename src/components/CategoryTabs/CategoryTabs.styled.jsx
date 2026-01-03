import styled from "@emotion/styled";
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

export const CategoryFilterBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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

export const CategoryFilterLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  @media (min-width: 400px) {
    font-size: 15px;
  }
color: #000000;
  @media (min-width: 600px) {
    font-size: 16px;
  }
`;
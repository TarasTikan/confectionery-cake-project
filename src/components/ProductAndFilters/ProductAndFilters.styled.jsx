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
export const WrapProductAndFilters = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 45px;
    @media (min-width: 800px) {
 margin-top: 40px;
  }
`

export const CakesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 20px;
  max-width: 800px;  
`;

export const EmptyState = styled.div`
  max-width: 420px;
  padding: 40px 30px;
  text-align: center;

  background: #fff;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

export const Emoji = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  font-size: 15px;
  color: #777;
  margin-bottom: 24px;
`;

export const ResetButton = styled.button`
  padding: 12px 22px;
  border-radius: 999px;
  border: none;

  background: #9b7df3;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(155, 125, 243, 0.4);
  }
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
  overflow: auto;
  @media (min-width: 600px) {
    width: calc((100% - 30px) / 3);
    flex-grow: 2;
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

export const Count = styled.p`
  font-size: 14px;
  color: rgba(15, 23, 42, 0.65);
  margin-bottom: 10px;

  b {
    color: rgba(15, 23, 42, 0.95);
  }
  @media (min-width: 600px) {
    margin-left: 35px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
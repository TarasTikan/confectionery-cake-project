import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const COLORS = {
  pink: "#ffe0e4",
  lavender: "#f8f0ff",
  accent: "#a663cc",
  text: "#1a1a1a",
  textMuted: "#4a4a4a",
  border: "#f5ccff",
};
export const HeroSection = styled.section`
  padding-bottom: 40px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f0ff 60%, #f3d9ff 100%);
  color: ${COLORS.text};
  padding-top: 100px;
  @media screen and (min-width: 600px) {
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1200px) {
    padding-bottom: 100px;
  }
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
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

export const AboutHeroTitleSecond = styled(motion.create("h2"))`
  margin-right: auto;
  margin-left: auto;
  padding: 5px 15px;
  border-radius: 999px;
  font-size: 15px;
  color: ${COLORS.accent};
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid ${COLORS.border};
  box-shadow: 0 2px 8px rgba(166, 99, 204, 0.15);
  margin-bottom: 40px;
  @media screen and (min-width: 600px) {
    margin-right: auto;
    margin-left: 0;
  }
`;

export const Title = styled(motion.create("h1"))`
  font-weight: 800;
  line-height: 1.1;
  font-size: 40px;
  color: ${COLORS.text};

  @media screen and (min-width: 600px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 60px;
  }
`;

export const AboutHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Description = styled(motion.create("p"))`
  font-size: 15px;
  line-height: 30px;
  color: #4a4a4a;
  text-align: center;
  @media screen and (min-width: 600px) {
    font-size: 17px;
  }
`;

export const PrimaryBtn = styled(motion.create(NavLink))`
  background-color: #a663cc;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  transition: box-shadow 0.3s ease, transform 0.3s ease, color 0.3s ease,
    background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 14px rgba(166, 99, 204, 0.45);
    background-color: #ffffff;
    color: #a663cc;
  }
  margin-right: 6px;
  font-size: 10px;
  @media screen and (min-width: 400px) {
    font-size: 13px;
  }
  @media screen and (min-width: 600px) {
    font-size: 16px;
    padding: 14px 28px;
    margin-right: 12px;
  }
`;

export const StatsList = styled(motion.create("ul"))`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 20px;
  list-style: none;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    gap: 24px;
  }
`;

export const StatsItem = styled.li`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid ${COLORS.border};
  border-radius: 24px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  width: 180px;

  @media screen and (min-width: 600px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 220px;
  }
`;
export const StatsNumber = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: ${COLORS.text};

  @media screen and (min-width: 600px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`;

export const StatsLabel = styled.p`
  margin-top: 4px;
  font-size: 14px;
  color: #666666;

  @media screen and (min-width: 600px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

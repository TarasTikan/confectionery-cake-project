import styled from "@emotion/styled";
import { motion } from "framer-motion";
const COLORS = {
  pink: "#ffe0e4",
  lavender: "#f8f0ff",
  accent: "#a663cc",
  text: "#1a1a1a",
  textMuted: "#4a4a4a",
  border: "#f5ccff",
};

export const ValuesSection = styled.section`
  background: linear-gradient(180deg, #f3d9ff 0%, #f8f0ff 60%, #ffffff 100%);
  padding: 40px 40px;

  @media screen and (min-width: 600px) {
    padding: 60px 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 80px 0;
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

export const ValuesTitle = styled(motion.h2)`
  color: ${COLORS.text};
  font-weight: 800;
  line-height: 1.1;
  font-size: 28px;
  margin-bottom: 10px;

  @media screen and (min-width: 400px) {
    font-size: 32px;
  }
  @media screen and (min-width: 600px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 44px;
  }
`;

export const ValuesLead = styled(motion.p)`
  color: ${COLORS.textMuted};
  font-size: 15px;
  line-height: 26px;
  max-width: 720px;
  margin-bottom: 24px;
  @media screen and (min-width: 600px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 30px;
  }
`;

export const ValuesGrid = styled(motion.ul)`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 400px) {
    gap: 18px;
  }
  @media screen and (min-width: 600px) {
    gap: 22px;
  }
  @media screen and (min-width: 1200px) {
    gap: 26px;
  }
`;

export const ValueCard = styled.li`
  background: #ffffff;
  border: 1px solid ${COLORS.border};
  border-radius: 28px;
  box-shadow: 0 6px 22px rgba(166, 99, 204, 0.08);
  padding: 16px;

  transition: box-shadow 0.25s ease, transform 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(166, 99, 204, 0.14);
    border-color: ${COLORS.accent};
  }

  @media screen and (min-width: 400px) {
    padding: 20px;
  }
  @media screen and (min-width: 600px) {
    padding: 22px;
    width: calc((100% - 30px) / 3);
    flex-grow: 2;
  }
  @media screen and (min-width: 1200px) {
    padding: 24px;
    width: calc((100% - 30px) / 4);
    flex-grow: 3;
  }
`;

// export const ValueIcon = styled.div`
//   width: 38px;
//   height: 38px;
//   font-size: 26px;
//   display: grid;
//   place-items: center;
//   border-radius: 12px;
//   background: ${COLORS.lavender};

//   @media screen and (min-width: 400px) {
//     width: 40px;
//     height: 40px;
//     font-size: 28px;
//   }
// `;

export const ValueTitle = styled.h3`
  color: ${COLORS.text};
  font-weight: 700;
  font-size: 13px;
  margin: 0 0 8px;

  @media screen and (min-width: 400px) {
    font-size: 20px;
  }
  @media screen and (min-width: 600px) {
    font-size: 22px;
  }
`;

export const ValueText = styled.p`
  color: ${COLORS.textMuted};
  font-size: 12px;
  line-height: 22px;
  margin-top: 6px;

  @media screen and (min-width: 400px) {
    font-size: 15px;
    line-height: 26px;
  }
  @media screen and (min-width: 600px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

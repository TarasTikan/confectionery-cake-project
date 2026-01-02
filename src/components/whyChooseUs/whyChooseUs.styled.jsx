import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const WhyChooseUsSection = styled(motion.create("section"))`
  padding-top: 40px;

  @media screen and (min-width: 600px) {
    padding-top: 50px;
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
  justify-content: space-between;
  flex-direction: column-reverse;
  @media screen and (min-width: 400px) {
    width: 400px;
  }
  @media screen and (min-width: 600px) {
    width: 600px;
    flex-direction: row;
  }
  @media screen and (min-width: 800px) {
    width: 800px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    justify-content: center;
    gap: 50px;
  }
`;

export const WhyChooseImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 220px;
  height: auto;

  @media (min-width: 400px) {
    width: 260px;
  }
  @media (min-width: 600px) {
    width: 320px;
  }
  @media (min-width: 1200px) {
    width: 460px;
    margin: 0;
  }
`;
export const WrapWhyText = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: start;

  @media (min-width: 600px) {
    gap: 12px;
  }
  @media (min-width: 1200px) {
    gap: 14px;
  }
`;

export const WhyTitle = styled.h2`
  margin: 0 0 12px;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 22px;
  line-height: 1.15;
  text-align: center;
  @media (min-width: 400px) {
    font-size: 24px;
  }
  @media (min-width: 600px) {
    font-size: 28px;
    text-align: left;
  }
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const BenefitText = styled.p`
  color: #564c47;
  font-size: 13px;
  line-height: 1.35;

  @media (min-width: 400px) {
    font-size: 14px;
  }
  @media (min-width: 600px) {
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const WrapText = styled(motion.create("div"))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

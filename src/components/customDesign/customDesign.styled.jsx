import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const DesignSection = styled.section`
  font-family: "Inter", sans-serif;
  padding-top: 40px;
  padding-bottom: 20px;
  @media screen and (min-width: 600px) {
    padding-top: 50px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 70px;
    padding-bottom: 50px;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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

export const DesignTitle = styled(motion.h2)`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  text-align: center;
  color: #2e2e2e;
  margin-bottom: 10px;
  font-size: 20px;

  @media (min-width: 400px) {
    font-size: 22px;
  }

  @media (min-width: 600px) {
    font-size: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const DesignSubTitle = styled(motion.p)`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-align: center;
  color: #555;
  line-height: 1.4;
  margin-bottom: 25px;
  font-size: 12px;

  @media (min-width: 400px) {
    font-size: 14px;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const DesignTitleCard = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #2e2e2e;
  margin-bottom: 20px;
  font-size: 14px;

  @media (min-width: 400px) {
    font-size: 16px;
  }

  @media (min-width: 600px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const DesignTextCard = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #555;
  line-height: 1.3;
  font-size: 12px;

  @media (min-width: 400px) {
    font-size: 13px;
  }

  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 15px;
  }
`;

export const DesignList = styled(motion.ul)`
  list-style: none;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const DesignListItem = styled.li`
  background-color: #ffff;
  border: 2px solid #8B5CF6;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  border-radius: 8px;
  width: calc((100% - 30px) / 2);

  @media (min-width: 1200px) {
    width: calc((100% - 30px) / 4);
    flex-grow: 3;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
  }
  &:hover svg {
    transform: scale(1.1);
  }

  svg {
    width: 58px;
    height: 58px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Designbtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 600px) {
    display: flex;
    height: 100%;
  }
`;

export const CreateCustombtn = styled.button`
width: 50%;
padding-top: 10px;
padding-bottom: 10px;
margin-top: 20px;
  border-radius: 10px;
  border: none;
  background-color:#9b6bce;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 9px;
  font-weight: 600;
  cursor: pointer;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 10px rgba(155, 107, 206, 0.3);
  &:hover {
    background-color: #7a4bc0;
  }

  @media (min-width: 600px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`;
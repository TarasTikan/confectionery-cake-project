import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
export const TasteSection = styled(motion.section)`
  font-family: "Inter", sans-serif;
  padding-top: 30px;
  padding-bottom: 20px;
  @media screen and (min-width: 600px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 50px;
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

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
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

export const TasteTitle = styled.h3`
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

export const StyledSlideCard = styled(SwiperSlide)`
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  &:hover h3 {
    color: #9b6bce;
  }

  &:hover div {
    opacity: 1;
  }

  &:hover button {
    opacity: 1;
  }
`;

export const TasteImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const TasteTitleProduct = styled.h3`
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #2e2e2e;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 400px) {
    font-size: 20px;
  }
`;

export const TasteBtnProduct = styled.button`
  width: 50%;
  height: 20px;
  border-radius: 20px;
  border: none;
  background-color: #fefcef;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  &:hover {
    background-color: #ffeef8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  svg {
    pointer-events: none;
    @media screen and (min-width: 400px) {
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (min-width: 400px) {
    width: 70%;
    height: 40px;
    bottom: 15px;
  }
`;

export const DescriptionContainer = styled.div`
  text-align: center;
  font-size: 14px;
  color: #555;
  line-height: 1.4;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  background-color: #fffefa;
  width: 80%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  border-radius: 20px;
  padding: ${({ active }) => (active === "true" ? "20px 10px" : "0 10px")};
  max-height: ${({ active }) => (active === "true" ? "150px" : "0")};
  transform: ${({ active }) =>
    active === "true" ? "translateY(25px)" : "translateY(20px)"};
  overflow: hidden;
  opacity: 0;
  transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1),
    padding 300ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 400px) {
    transform: ${({ active }) =>
      active === "true" ? "translateY(0)" : "translateY(20px)"};
  }
`;

export const TasteTextDescribe = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #2e2e2e;
  line-height: 1.4;
  font-size: 9px;
  @media screen and (min-width: 400px) {
    font-size: 12px;
  }
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

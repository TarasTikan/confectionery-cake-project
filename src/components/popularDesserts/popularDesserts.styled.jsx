import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
export const PopularDessertsSection = styled(motion.section)`
  background-color: #fff8f0;
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

export const PopularDessertsTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #2e2e2e;

  @media screen and (min-width: 600px) {
    font-size: 32px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const PopularDessertsImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const WrapInfo = styled.div`
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  gap: 12px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 15px;
  margin: 0 auto;
  padding: 20px;
  transform: translateY(110%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ProductTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2e2e2e;
`;

export const ProductPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin: 0;
`;

export const ProductButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #9b6bce;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #643a99ff;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
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

export const StyledSlideCard = styled(SwiperSlide)`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  &:hover div {
    transform: translateY(0);
  }
`;

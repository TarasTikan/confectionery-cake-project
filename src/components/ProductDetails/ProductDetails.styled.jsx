import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ProductWrapInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;

  max-height: 480px;
`;

export const ProductTitle = styled.h1`
  font-size: 36px;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
text-align: center;
  @media (min-width: 800px) {
  font-size: 36px;

    text-align: start;
  }
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  @media (min-width: 800px) {
    text-align: start;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #444;
  margin-bottom: 25px;
    text-align: center;
  @media (min-width: 800px) {
    text-align: start;
  }
`;

export const ProductInfo = styled.p`
  margin: 6px 0;
  font-size: 16px;
   text-align: center;
  @media (min-width: 800px) {
    text-align: start;
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`;

export const AddToCartBtn = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: #9d6dd1ff;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease;


  @media (min-width: 600px) {
    font-size: 16px;
  }
  &:hover {
    background-color: #643a99ff;
  }
`;

export const BuyNowBtn = styled(NavLink)`
  background: #fff;
  color: #333;
  border: 2px solid #d6c8ff;
  padding: 14px 26px;
  font-size: 16px;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background-color: #f5f1ff;
  }
`;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const OrderSection = styled.section`
  padding: 100px 0;
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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

export const WrapInfoOrder = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  @media screen and (min-width: 600px) {
    gap: 20px;
    flex-direction: row;
  }
`;
export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: #111;

  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  display: none;

  @media (min-width: 600px) {
    display: block;
    text-align: center;
  }
`;

export const Form = styled.form`
  background: #fff;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    color: #333;
  }

  @media (min-width: 700px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e2e2e2;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: #9b7bf5;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 14px;
  border: none;
  background-color: #9b6bce;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.25s ease;

  &:hover {
    background-color: #643a99ff;
  }

  @media (min-width: 800px) {
    padding: 16px;
    font-size: 16px;
  }
`;

export const SummaryBox = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 14px;
  height: fit-content;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    padding: 28px;
    border-radius: 16px;
  }
`;

export const TitleListOrder = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 18px;
`;
export const SummaryText = styled.p`
  margin: 6px 0;
  font-size: 15px;
  color: #333;
`;
export const ListOrder = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 18px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
  &::-webkit-scrollbar {
    height: 3px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d3c3ff;
    border-radius: 10px;
  }
`;
export const CartItem = styled.li`
  display: flex;
  gap: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid "#f1d8ff";

  @media (min-width: 400px) {
    gap: 18px;
  }

  @media (min-width: 600px) {
    gap: 20px;
  }
`;

export const ItemImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 16px;
  object-fit: cover;

  @media (min-width: 400px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 600px) {
    width: 88px;
    height: 88px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ItemName = styled(NavLink)`
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
  color: #1a1a1a;
  width-max: 310px 
  transition: color 0.3s ease;
  @media (min-width: 400px) {
    font-size: 13px;
  }
  @media (min-width: 600px) {
    font-size: 16px;
  }
      &:hover {
    color: #a663cc;
  }
`;

export const ItemPrice = styled.p`
  font-size: 9px;
  color: "#666";
  margin: 6px 0;
  @media (min-width: 400px) {
    font-size: 11px;
  }
  @media (min-width: 600px) {
    font-size: 13px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    font-size: 16px;
    width: 24px;
    text-align: center;

    @media (min-width: 600px) {
      font-size: 17px;
    }
  }
`;

export const QuantityBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  border: 1px solid "#f1d8ff";
  background: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #f8f0ff;
  }

  @media (min-width: 400px) {
    width: 34px;
    height: 34px;
    font-size: 18px;
  }
`;

export const DeleteItemsBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  svg {
  width: 20px;
  height: 20px;
    cursor: pointer;
    transition: fill 0.3s ease, transform 0.3s ease;
   
    &:hover {
      fill: #ff4c4c;
      transform: scale(1.1);
      }
`;
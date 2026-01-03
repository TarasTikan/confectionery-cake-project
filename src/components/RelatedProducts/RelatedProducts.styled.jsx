import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const RelatedTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
  margin-top: 50px;
`;

export const RelatedList = styled.ul`
  display: flex;
  gap: 20px;

  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d3c3ff;
    border-radius: 10px;
  }
`;

export const RelatedCard = styled.li`
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  min-width: 250px;
  min-height: 250px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  &:hover div {
    transform: translateY(0);
  }
`;

export const RelatedImage = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const WrapInfo = styled.div`
  background-color: #fff;
  border-radius: 20px;
  text-align: center;
  width: 200px;
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

export const RelatedName = styled(NavLink)`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #2e2e2e;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #a663cc;
  }
`;

export const RelatedPrice = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #555;
  margin: 0;
`;

export const RelatedButton = styled.button`
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

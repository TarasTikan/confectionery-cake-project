import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const OrderSection = styled(motion.create("section"))`
  text-align: center;
  padding-top: 70px;
  padding-bottom: 120px;

  @media (max-width: 1200px) {
    padding-top: 90px;
    padding-bottom: 90px;
  }

  @media (max-width: 600px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media (max-width: 400px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media (max-width: 300px) {
    padding-top: 50px;
    padding-bottom: 50px;
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

export const OrderTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 38px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }

  @media (max-width: 400px) {
    font-size: 26px;
  }

  @media (max-width: 300px) {
    font-size: 22px;
  }
`;

export const OrderText = styled.p`
  color: #4a4a4a;
  font-size: 18px;
  line-height: 28px;
  margin: 0 auto 40px auto;
  max-width: 600px;

  @media (max-width: 1200px) {
    font-size: 17px;
    line-height: 26px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 24px;
    max-width: 90%;
  }

  @media (max-width: 400px) {
    font-size: 15px;
  }

  @media (max-width: 300px) {
    font-size: 14px;
  }
`;

export const ListButtons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CallBtn = styled.a`
  background-color: rgba(255, 255, 255, 0.9);
  color: #a663cc;
  border: 1px solid #a663cc;
  padding: 16px 20px;
  border-radius: 24px;
  font-weight: 500;
  text-decoration: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  display: inline-block;

  &:hover {
    box-shadow: 0 6px 14px rgba(166, 99, 204, 0.45);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    padding: 14px 28px;
    font-size: 15px;
  }
`;

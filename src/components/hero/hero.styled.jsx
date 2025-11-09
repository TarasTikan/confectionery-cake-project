import styled from "@emotion/styled";

export const HeroSection = styled.section`
  padding-top: 40px;

  @media screen and (min-width: 600px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 80px;
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
  }
`;

export const HeroWrapInfo = styled.div`
  width: 100%;
  max-width: 100%;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: 600px) {
    max-width: 350px;
    text-align: left;
    margin-bottom: 0;
  }
  @media screen and (min-width: 800px) {
    max-width: 350px;
    text-align: left;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    max-width: 540px;
    margin-bottom: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #2e2e2e;
  line-height: 1.2;
  margin-bottom: 16px;
  @media screen and (min-width: 600px) {
    font-size: 36px;
  }
`;

export const HeroSubTitle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #555555;
  line-height: 1.5;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    margin-bottom: 28px;
  }
`;

export const HeroBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 8px;
  border: none;
  background-color: #9b6bce;
  color: #fff;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #643a99ff;
  }

  @media screen and (min-width: 600px) {
    font-size: 15px;
    padding: 12px 26px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 14px 32px;
  }
`;

export const HeroImage = styled.img`
  width: auto;
  max-width: 300px;
  height: auto;
  border-radius: 12px;
  @media screen and (min-width: 400px) {
    max-width: 350px;
  }
  @media screen and (min-width: 800px) {
    max-width: 450px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

import styled from "@emotion/styled";

export const DesignSection = styled.section`
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

export const DesignTitle = styled.h2`
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

export const DesignSubTitle = styled.p`
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

export const DesignList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  max-width: 850px;
`;

export const DesignListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 16px;
  text-align: center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-grow: 1;
  width: 130px;
  height: 140px;
  cursor: pointer;

  @media (min-width: 400px) {
    width: 150px;
    height: 160px;
    padding: 18px;
  }

  @media (min-width: 600px) {
    width: 180px;
    height: 190px;
    padding: 20px;
  }

  @media (min-width: 1200px) {
    width: 200px;
    height: 210px;
    padding: 24px;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
  }

  &:hover svg {
    transform: scale(1.1);
  }

  svg {
    display: block;
       width: 58px;
      height: 58px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  }
`;

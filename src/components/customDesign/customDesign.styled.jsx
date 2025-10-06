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
  list-style: none;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const DesignListItem = styled.li`
  background-color: #ffff;
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

export const StepsWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StepsTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #2e2e2e;
  margin-bottom: 12px;

  font-size: 20px; // 320px

  @media (min-width: 600px) {
    font-size: 26px;
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 36px;
    margin-bottom: 22px;
  }
`;
export const StepsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StepsItemImg = styled.img`
  height: auto;
`;

export const StepsItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f0e8ff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 250px;
  width: calc((100% - 30px) / 2);
  cursor: pointer;
  @media (min-width: 1200px) {
    width: calc((100% - 30px) / 4);
    flex-grow: 3;
  }
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(1) img {
    width: 70px;
    height: auto;
    @media (min-width: 400px) {
      width: 85px;
    }
    @media (min-width: 600px) {
      width: 110px;
    }
  }

  &:nth-child(2) img {
    width: 85px;
    @media (min-width: 400px) {
      width: 100px;
    }
    @media (min-width: 600px) {
      width: 120px;
    }
  }

  &:nth-child(3) img {
    width: 50px;
    @media (min-width: 400px) {
      width: 58px;
    }
    @media (min-width: 600px) {
      width: 65px;
    }
  }
  &:nth-child(4) img {
    width: 80px;
    @media (min-width: 400px) {
      width: 88px;
    }
    @media (min-width: 600px) {
      width: 110px;
    }
  }
`;

export const StepsItemTitle = styled.h3`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #ffff;
  margin-bottom: 8px;
  font-size: 14px;
  background-color: #8f4ffe;
  width: 30px;
  height: 30px;
  padding: 6px;
  border-radius: 50%;
  @media (min-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const StepsItemText = styled.p`
  font-family: "Inter", sans-serif;
  color: #555;
  font-size: 12px;
  line-height: 1.5;

  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;

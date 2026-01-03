import styled from "@emotion/styled";

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

import styled from "@emotion/styled";


export const OrderSection = styled.section`
  padding: 60px 0;
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
gap: 50px;
`
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
`;

export const Form = styled.form`
  background: #fff;
  border-radius: 20px;
  padding: 28px;
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

  @media (max-width: 600px) {
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
  margin-top: 24px;
  padding: 16px;
  border-radius: 14px;
  border: none;
  background-color: #9b6bce;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 0.25s ease;

  &:hover {
    background-color: #643a99ff;
  }
`;


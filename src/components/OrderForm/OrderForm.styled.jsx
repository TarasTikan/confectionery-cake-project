import styled from "@emotion/styled";

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

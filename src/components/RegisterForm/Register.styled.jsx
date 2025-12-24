import styled from "@emotion/styled";
import authBg from "../../img/authBg.jpg"
export const AuthPage = styled.section`
 min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${authBg}); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 20px;
`;


export const AuthForm = styled.form`
  width: 100%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 36px 32px;

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

export const AuthTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #111;
  margin-bottom: 10px;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid #e5e5e5;
  font-size: 15px;
  color: #111;

  transition: border-color 200ms ease, box-shadow 200ms ease;

  &:focus {
    outline: none;
    border-color: #9b7bf5;
    box-shadow: 0 0 0 4px rgba(155, 123, 245, 0.15);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const AuthButton = styled.button`
  margin-top: 6px;
  padding: 15px;
  border-radius: 14px;
  border: none;

  background: linear-gradient(135deg, #9b7bf5, #b28cff);
  color: #fff;

  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  transition: transform 150ms ease, box-shadow 150ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(155, 123, 245, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const AuthFooterText = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #666;

  a {
    color: #9b7bf5;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
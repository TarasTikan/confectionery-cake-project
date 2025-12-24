import styled from "@emotion/styled";

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
  font-family: "Playfair Display", serif;
  font-size: 34px;
  font-weight: 600;
  color: #1f1f1f;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const AuthSubtitle = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #6b6b6b;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const AuthInput = styled.input`
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

background-color: #9b6bce;
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
  margin-top: 18px;
  font-size: 14px;
  color: #777;
  text-align: center;

  a {
    color: #9b7bf5;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
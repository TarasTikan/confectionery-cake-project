import styled from "@emotion/styled";
export const Bar = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 0 10px 30px rgba(20, 30, 60, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.06);
  display: none;
  flex-direction: column;
  gap: 15px;
  @media screen and (min-width: 800px) {
    display: flex;
  }
`;
export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 12px;
  line-height: 1.2;
  color: rgba(15, 23, 42, 0.65);
  font-weight: 600;
`;

export const controlBase = `
  height: 44px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.10);
  background: rgba(248, 250, 252, 0.9);
  color: rgba(15, 23, 42, 0.95);
  font-size: 14px;
  outline: none;
  transition: box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover {
    border-color: rgba(15, 23, 42, 0.18);
    background: rgba(248, 250, 252, 1);
  }

  &:focus {
    border-color: #9b7bf5;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.18);
    background: #ffffff;
  }

  &::placeholder {
    color: rgba(15, 23, 42, 0.35);
  }
`;

export const Select = styled.select`
  ${controlBase};
  appearance: none;
  padding-right: 42px;
  cursor: pointer;
  background-image: linear-gradient(
      45deg,
      transparent 50%,
      rgba(15, 23, 42, 0.55) 50%
    ),
    linear-gradient(135deg, rgba(15, 23, 42, 0.55) 50%, transparent 50%);
  background-position: calc(100% - 18px) 18px, calc(100% - 12px) 18px;
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
`;


export const ClearFiltrBtn = styled.button`
  height: 44px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.1);
  background-color: #9b7bf5;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  transition: box-shadow 180ms ease, border-color 180ms ease,
    background 180ms ease;
  cursor: pointer;
  &:hover {
    border-color: rgba(15, 23, 42, 0.18);
    background-color: #9b7bf5;
  }

  &:focus {
    border-color: #9b7bf5;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.18);
    background-color: #9b7bf5;
  }
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const Count = styled.p`
  margin: 0;
  font-size: 14px;
  color: rgba(15, 23, 42, 0.65);

  b {
    color: rgba(15, 23, 42, 0.95);
  }
`;

export const Range = styled.input`
  width: 100%;
  height: 6px;
  appearance: none;
  background: linear-gradient(
    to right,
    #9b7bf5 0%,
    #9b7bf5 ${({ actual }) => actual}%,
    #e5e7eb ${({ actual }) => actual}%,
    #e5e7eb 100%
  );
  border-radius: 999px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background: #9b7bf5;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 4px 10px rgba(20, 99, 255, 0.35);
    transition: transform 150ms ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #e5e7eb;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 4px 10px rgba(20, 99, 255, 0.35);
  }
`;

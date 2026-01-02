import styled from "@emotion/styled";
export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
z-index: 9999;
opacity: ${({ open }) => (open ? 1 : 0)};
pointer-events: ${({ open }) => (open ? "auto" : "none")};
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const MobFilterSection = styled.div`
position: fixed;
top: 0;
left: 0;
width: 50%;
height: 100%;
background-color: #fff;
z-index: 100;
padding: 10px 48px 48px 40px;

transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
opacity: ${({ open }) => (open ? 1 : 0)};
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
  transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const MobFilterContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;

export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
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

export const Input = styled.input`
  ${controlBase};
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
export const BtnHeaderClouse = styled.button`
  background-color: transparent;
  margin-left: auto;
  border: none;
  font-size: 24px;
  display: flex;
  cursor: pointer;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #9b6bce;
  }
`;

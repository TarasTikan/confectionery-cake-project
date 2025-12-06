import styled from "@emotion/styled";

const COLORS = {
  accent: "#a663cc",
  accentSoft: "#d199ff",
  border: "#f1d8ff",
  bg: "#ffffff",
  text: "#1a1a1a",
  muted: "#666",
};

export const CartOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
    opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;


export const CartModal = styled.div`
  width: 92%;
  max-width: 500px;
  background: ${COLORS.bg};
  border-radius: 26px;
  padding: 24px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
  transform: ${({ open }) =>
    open ? "translate(0, 0) scale(1)" : "translate(0, 0) scale(0)"};
  opacity: ${({ open }) => (open ? 1 : 0)};
 transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* 400px */
  @media (min-width: 400px) {
    padding: 28px;
    max-width: 520px;
  }

  /* 600px */
  @media (min-width: 600px) {
    padding: 32px;
    max-width: 560px;
  }

`;


export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTitle = styled.h1`
  font-size: 26px;
  font-weight: 800;

  @media (min-width: 400px) {
    font-size: 28px;
  }

  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${COLORS.text};
transition: color 0.3s ease, transform 0.3s ease, transform 0.3s ease;
  &:hover {
    transform: scale(1.12);
    color: #a663cc;
  }
`;

export const CartList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const CartItem = styled.li`
  display: flex;
  gap: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLORS.border};

  @media (min-width: 400px) {
    gap: 18px;
  }

  @media (min-width: 600px) {
    gap: 20px;
  }
`;

export const ItemImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 16px;
  object-fit: cover;

  @media (min-width: 400px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 600px) {
    width: 88px;
    height: 88px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ItemName = styled.h2`
  font-size: 14px;
  font-weight: 600;
width-max: 310px 
  @media (min-width: 400px) {
    font-size: 16px;
  }

 
`;

export const ItemPrice = styled.p`
  font-size: 13px;
  color: ${COLORS.muted};
  margin: 6px 0;

  @media (min-width: 600px) {
    font-size: 13px;
  }
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    font-size: 16px;
    width: 24px;
    text-align: center;

    @media (min-width: 600px) {
      font-size: 17px;
    }
  }
`;

export const QuantityBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  background: #fff;
  font-size: 18px;
  cursor: pointer;
transition: background 0.3s ease;
  &:hover {
    background: #f8f0ff;
  }

  @media (min-width: 400px) {
    width: 34px;
    height: 34px;
  }

  @media (min-width: 600px) {
    width: 38px;
    height: 38px;
  }
`;


export const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 13px;
  border-radius: 18px;
  background: ${COLORS.accent};
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.25s;
transition: background 0.3s ease;
  &:hover {
    background: ${COLORS.accentSoft};
  }

  @media (min-width: 600px) {
    padding: 16px;
    font-size: 15px;
  }
`;

export const ContinueButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: 13px;
  border-radius: 18px;
  border: 2px solid ${COLORS.border};
  background: #fff;
  color: ${COLORS.accent};
  cursor: pointer;
transition: background 0.3s ease;

  &:hover {
    background: #faf6ff;
  }

  @media (min-width: 600px) {
    padding: 14px;
    font-size: 15px;
  }
`;
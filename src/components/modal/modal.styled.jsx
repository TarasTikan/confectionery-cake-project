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

export const ModalWindow = styled.div`
  width: 90%;
  min-height: 581px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ open }) =>
    open ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)"};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
`;

export const ClouseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  text-align: center;
  color: #222; /* глибокий сірий */
  margin-bottom: 20px;

  @media (max-width: 400px) {
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: 401px) and (max-width: 1199px) {
    font-size: 24px;
    line-height: 1.4;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const LabelForm = styled.label`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #444;
  margin-bottom: 8px;
  display: block;

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 1.2;
  }

  @media (min-width: 401px) and (max-width: 1199px) {
    font-size: 16px;
    line-height: 1.3;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 1.4;
  }
`;

export const ListForm = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ItemForm = styled.li`
  background-color: #fbf9ff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  width: calc((100% - 30px) / 2);

  @media (min-width: 1200px) {
    width: calc((100% - 30px) / 4);
    flex-grow: 3;
  }
`;

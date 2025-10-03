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
  color: #222;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.3;

  @media (min-width: 600px) {
    font-size: 24px;
    line-height: 1.4;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const TitleForm = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  color: #444;
  margin-bottom: 8px;
  display: block;
  font-size: 14px;
  line-height: 1.2;
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 15px;
  }
`;

export const ListForm = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    gap: 15px;
  }
`;

export const ItemForm = styled.li`
  background-color: #fbf9ff;
  border-radius: 8px;
  padding: 10px;
text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
  border: 1px solid #ece8f6;


  @media (min-width: 600px) {
  width: calc((100% - 30px) / 2); 
  @media (min-width: 1200px) { 
  width: calc((100% - 30px) / 4); 
  flex-grow: 3;}
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    border-color: #9b6bce;
    background: #f6f0ff;
    color: #9b6bce;
    box-shadow: 0 0 0 3px rgba(155, 107, 206, 0.15) inset;
  }
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  background: #fff;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #2e2e2e;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 6px 10px;
  &:hover {
    border-color: #9b6bce;
    color: #9b6bce;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 20px;
    border-radius: 14px;
  }
`;

export const FormCakes = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const TasteSelect = styled.select`
  width: 100%;
  height: 28px;
  padding: 0 14px;
  border-radius: 12px;
  border: 2px solid #e5e5e5;
  background: #fff;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #2e2e2e;
  cursor: pointer;
  transition: all 0.3s ease;

  /* При наведенні */
  &:hover {
    border-color: #9b6bce;
  }

  /* Фокус (коли відкривається список) */
  &:focus {
    outline: none;
    border-color: #9b6bce;
    box-shadow: 0 0 0 3px rgba(155, 107, 206, 0.15);
  }

  @media (min-width: 400px) {
    font-size: 12px;
  }

  @media (min-width: 600px) {
    font-size: 15px;
    height: 35px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    height: 48px;
  }
`;

export const DesignCakesForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  @media (min-width: 600px) {
    gap: 10px;
  }
`;

export const DecorLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Inter", system-ui, sans-serif;
  color: #2e2e2e;
  font-size: 12px;
  font-weight: 500;
  text-align: start;
  @media (min-width: 320px) {
    font-size: 13px;
  }

  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const DecorCheckbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #bdbdbd;
  border-radius: 8px; /* легке округлення */
  background: #fff;
  position: relative;
  transition: all 0.2s ease;

  /* фокус із клавіатури */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(155, 107, 206, 0.35);
    border-color: #9b6bce;
  }

  /* стан hover саме на боксі */
  &:hover {
    border-color: #9b6bce;
  }

  /* стан checked: фіолетовий фон + біла галочка */
  &:checked {
    border-color: #9b6bce;
    background-color: #9b6bce;
  }

  /* намальована галочка SVG'ом, щоб було чітко на будь-якому DPI */
  &:checked::after {
    content: "";
    inset: 0;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 9px 9px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>");
  }

  @media (min-width: 1200px) {
    width: 22px;
    height: 22px;
    &:checked::after {
      background-size: 16px 16px;
    }
  }
`;

export const CommentCakes = styled.textarea`
  width: 100%;
  padding: 5px;
  border-radius: 12px;
  height: 100%;
  border: 2px solid #e5e5e5;
  background: #fff;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #2e2e2e;
  cursor: pointer;
  transition: all 0.3s ease;
  resize: none;
  /* При наведенні */
  &:hover {
    border-color: #9b6bce;
  }

  /* Фокус (коли відкривається список) */
  &:focus {
    outline: none;
    border-color: #9b6bce;
    box-shadow: 0 0 0 3px rgba(155, 107, 206, 0.15);
  }
  @media (min-width: 1200px) {
    padding: 10px;
    font-size: 15px;
  }
`;

export const FileUploadForm = styled.form`
  border: 2px dashed #d4c2f6;
  border-radius: 12px;
  padding: 10px;

  cursor: pointer;
  background-color: #fbf9ff;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #9b6bce;
  }
  @media (min-width: 600px) {
    padding: 20px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 14px;
  @media (min-width: 600px) {
    margin-top: 24px;
  }
`;

export const ConfirmButton = styled.button`
  padding: 9px 15px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(90deg, #9b6bce 0%, #7a4bc0 100%);
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 10px rgba(155, 107, 206, 0.3);
  &:hover {
    background-color: linear-gradient(90deg, #7a4bc0 0%, #9b6bce 100%);
  }

  @media (min-width: 600px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`;

export const CancelButton = styled.button`
  padding: 9px 15px;
  border-radius: 10px;
  border: 2px solid #9b6bce;
  background: #fff;
  color: #9b6bce;
  font-family: "Inter", sans-serif;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #f6f0ff;
  }
  @media (min-width: 1200px) {
    padding: 12px 20px;
    font-size: 15px;
  }
`;

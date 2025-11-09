import styled from "@emotion/styled";

export const MobMenuSection = styled.div`
  position: fixed;
  top: 0;
  left: 0; /* ставимо з лівого краю */
  width: 50%;
  height: 100%;
  background-color: #fff;
  z-index: 100;
  padding: 10px 48px 48px 40px;

  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition:
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
export const MobMenuContainer = styled.div`
   flex-direction: column;
    justify-content: space-between;
    height: 100%;
    display: flex;
`

export const MobMenuBtn = styled.a`
  background-color: #a663cc;
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 500;
  display: block;
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease, color 0.3s ease,
    background-color 0.3s ease;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 6px 14px rgba(166, 99, 204, 0.45);
    background-color: #ffffff;
    color: #3b3b3bff;
  }
  
`;
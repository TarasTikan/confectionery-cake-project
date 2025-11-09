import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const MobMenuSection = styled.div`
position: fixed;
top: 0;
left: 0;
width: 50%;
height: 100%;
background-color: #ffff;
z-index: 1;
padding-top: 10px;
padding-bottom: 48px;
padding-left: 40px;
padding-right: 15px;
transform: ${({ open }) =>
    open ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)"};
  opacity: ${({ open }) => (open ? 1 : 0)};
`
export const MobMenuContainer = styled.div`
   flex-direction: column;
    justify-content: space-between;
    height: 100%;
    display: flex;
`
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
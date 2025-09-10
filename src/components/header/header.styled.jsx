import styled from '@emotion/styled';

export const Header = styled.header`
background-color: #FFFFFF;
  padding-top: 20px;
  padding-bottom: 50px;
  padding: 27px 25px;
  font-family: 'Inter';
`
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 310px;
  }
  @media screen and (min-width: 768px) {
    width: 610px;
  }
  @media screen and (min-width: 1200px) {
    width: 1357px;
  }
`;


export const Logo = styled.a`
margin-right: auto;
 font-size: 24px;   
  font-weight: 700;    
  color: #9B6BCE;      
  text-decoration: none;
`

export const NavList = styled.ul`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
list-style:none;
`

export const NavLink = styled.a`
 font-family: 'Inter';
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  color: #2E2E2E;
  text-decoration: none;
  padding-top: 44px;
  padding-bottom: 55px;
 transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  color: #9B6BCE;     
}
`
export const BtnHeader = styled.button`
 font-family: 'Inter';
 font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background-color: #9B6BCE;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
  background-color: #F89B82;    
}
  `

export const BtnBasket = styled.button`
   width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
   transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
 cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
    
    &:hover {
      fill: #fff;
      background-color: #9B6BCE;
    }`
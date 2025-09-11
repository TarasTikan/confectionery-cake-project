import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #FFFFFF;
  font-family: 'Inter', sans-serif;
     padding-top: 15px
    padding-bottom: 20px
  @media screen and (min-width: 600px) {
     padding-top: 20px
    padding-bottom: 30px
  }

  @media screen and (min-width: 1200px) {
         padding-top: 25px
    padding-bottom: 50px
  }
`
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
      @media screen and (min-width: 800px) {
    width: 800px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;


export const Logo = styled.a`
  font-size: 20px; /* мобілка */
  font-weight: 700;
  color: #9B6BCE;
  text-decoration: none;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    font-size: 22px; /* планшет */
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px; /* пк */
    margin-right: auto;
    margin-left: 0;
  }
`

export const NavList = styled.ul`
  display: none; /* мобілка */
  gap: 20px;
  align-items: center;
  list-style: none;

  @media screen and (min-width: 1200px) {
    display: flex; /* планшет */
  }
`

export const NavLink = styled.a`
  font-size: 14px;  /* мобілка */
  font-weight: 500;
  color: #2E2E2E;
  text-decoration: none;
  padding: 10px 0;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #9B6BCE;
  }

  @media screen and (min-width: 600px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    padding: 20px 0; /* більше простору */
  }
`
export const BtnHeader = styled.button`
 font-size: 14px;   /* мобілка */
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 30px;
  border: none;
  background-color: #9B6BCE;
  color: #fff;
  cursor: pointer;
  margin-left: auto;
  margin-right: 10px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
display: none;
  &:hover {
    background-color: #F89B82;
  }

  @media screen and (min-width: 600px) {
    font-size: 15px; /* планшет */
    padding: 10px 20px;
    margin-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px; /* пк */
    padding: 12px 28px;
    margin-right: 20px;
    display: block;
  }
  `

export const BtnBasket = styled.button`
    width: 45px;  /* мобілка */
  height: 45px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
              border 250ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    fill: #fff;
    background-color: #9B6BCE;
  }

  @media screen and (min-width: 600px) {
    width: 55px;  /* планшет */
    height: 55px;
    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 60px; /* пк */
    height: 60px;
    svg {
      width: 25px;
      height: 25px;
    }
  }`

  export const BtnMobMenu = styled.button`
    width: 45px;  /* мобілка */
  height: 45px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
              border 250ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    fill: #fff;
    background-color: #9B6BCE;
  }

  @media screen and (min-width: 600px) {
    width: 55px;  /* планшет */
    height: 55px;
    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 60px; /* пк */
    height: 60px;
    svg {
      width: 25px;
      height: 25px;
    }
      display: none;
  }`
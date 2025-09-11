import styled from '@emotion/styled';



export const HeroSection = styled.section`
padding-top: 60px;
padding-bottom: 60px;
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


export const HeroTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 36px;      
  font-weight: 700;     
  color: #2E2E2E;        
  line-height: 1.2;
  margin-bottom: 16px;
`

export const HeroSubTitle = styled.p`
 font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #555555;        
  line-height: 1.5;
  margin-bottom: 24px; 
`

export const HeroBtn = styled.button`
 font-size: 16px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 8px;
  border: none;
  background-color: #9B6BCE; 
  color: #fff;
  cursor: pointer;
 transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  background-color: #e57e65;
  }
`

export const HeroImage = styled.img`
 width: auto;       
  height: auto;
  border-radius: 12px;
  margin-left: auto;  

    @media screen and (min-width: 320px) {
    width: 310px;
  }
  @media screen and (min-width: 768px) {
    width: 310px;
  }
  @media screen and (min-width: 1200px) {
    width: 600px;
  }
`
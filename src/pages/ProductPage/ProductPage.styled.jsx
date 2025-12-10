import styled from "@emotion/styled";

export const ProductPageSection = styled.section`
 width: 100%;
  padding: 20px 0;

`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 400px) {
    width: 400px;
  }
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

export const WrapInfo = styled.div`
display: flex;
gap: 20px;
flex-direction: column;
 @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 50px;
  }

`

export const ImageDessert = styled.img`
  height: auto;
  border-radius: 16px;
  object-fit: contain;
  max-height: 320px; 
   @media screen and (min-width: 400px) {
    max-height: 380px; 
  }
   @media screen and (min-width: 600px) {
    max-height: 520px; 
  }
 @media screen and (min-width: 1200px) {
    max-height: 620px; 
  }

`;

export const ProductTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;


export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.p`
   margin: 6px 0;
    font-size: 16px;
`;

export const ProductShortDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #444;
  margin-bottom: 25px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;

`;

export const AddToCartBtn = styled.button`
 font-family: "Inter", sans-serif;
  font-size: 8px;
  font-weight: 600;
  color: #fff;
  background: #9d6dd1ff;
  border: none;
  border-radius: 12px;

  cursor: pointer;
  transition: background 0.3s ease;

  @media (min-width: 400px) {
    font-size: 12px;
  }

  @media (min-width: 600px) {
    font-size: 16px;
  }
     &:hover {
    background-color: #643a99ff;
  }
`;

export const BuyNowBtn = styled.button`
  background: #fff;
  color: #333;
  border: 2px solid #d6c8ff;
  padding: 14px 26px;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    background-color: #f5f1ff;
  }
`;
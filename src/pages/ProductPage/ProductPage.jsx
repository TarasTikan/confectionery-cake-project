import { ProductPageSection, Container } from "./ProductPage.styled";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import { FooterCake } from "../../components/Footer/Footer";

import { ProductDetails } from "../../components/ProductDetails/ProductDetails";

export const ProductPage = () => {
  return (
    <>
      <main>
        <ProductPageSection>
          <Container>
            <ProductDetails />
            <RelatedProducts />
          </Container>
        </ProductPageSection>
      </main>
      <FooterCake />
    </>
  );
};

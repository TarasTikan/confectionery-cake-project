import { ProductPageSection, Container } from "./ProductPage.styled";
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts";
import { FooterCake } from "../../components/Footer/Footer";

import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/products/selectors";
import { Loader } from "../../components/Loader/Loader";

export const ProductPage = () => {
  const loading = useSelector(getIsLoading);
  return (
    <>
      <main>
        <ProductPageSection>
          <Container>
            {loading ? <Loader /> : <><ProductDetails /> <RelatedProducts /></>}
          </Container>
        </ProductPageSection>
      </main>
      <FooterCake />
    </>
  );
};

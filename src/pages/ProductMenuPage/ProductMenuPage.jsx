import {
  BuyButton,
  CakeCard,
  CakeImage,
  CakeName,
  CakePrice,
  CakesList,
  CategoryContainer,
  CategoryFilterBar,
  CategoryFilterItem,
  CategorySection,
  CategoryTitle,
  WrapCakeInfo,
  CategoryFilterLink,
} from "./ProductMenuPage.styled";
import { products } from "../../data/data";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
const CATEGORY_TITLES = {
  cakes: "Торти",
  cupcakes: "Капкейки",
  macarons: "Макарони",
  tarts: "Тарти",
};
export const ProductMenuPage = () => {
  const { category } = useParams();

  const name = CATEGORY_TITLES[category] || "Усі десерти";

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [category]);

  const filteredProducts = useMemo(
    () =>
      category === "allProducts"
        ? products
        : products.filter((product) => product.type === category),
    [category]
  );

  return (
    <>
      <CategorySection>
        <CategoryContainer>
          <CategoryTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {name}
          </CategoryTitle>
          <CategoryFilterBar>
            <CategoryFilterItem active={category === "allProducts" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/allProducts"> 
                Усі
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "cakes" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/cakes" >Торти</CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "cupcakes" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/cupcakes">
                Капкейки
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "macarons" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/macarons" >
                Макарони
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "tarts" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/tarts" >Тарти</CategoryFilterLink>
            </CategoryFilterItem>
          </CategoryFilterBar>
          <CakesList>
            {filteredProducts.map((product) => (
              <CakeCard
                key={product.id}
              >
                <CakeImage src={product.image} />
                <WrapCakeInfo>
                  <CakeName>{product.title}</CakeName>
                  <CakePrice>{product.price} грн</CakePrice>
                  <BuyButton>Додати до кошика</BuyButton>
                </WrapCakeInfo>
              </CakeCard>
            ))}
          </CakesList>
        </CategoryContainer>
      </CategorySection>
    </>
  );
};

import {
  BuyButton,
  CakeCard,
  CakeImage,
  CakeName,
  CakePrice,
  CakesList,
  CategoryContainer,
  CategorySection,
  CategoryTitle,
  WrapCakeInfo,
} from "./ProductMenuPage.styled";
import { products } from "../../data/data";
import { useParams } from "react-router-dom";
const CATEGORY_TITLES = {
  cakes: "Торти",
  cupcakes: "Капкейки",
  macarons: "Макарони",
  tarts: "Тарти",
};
export const ProductMenuPage = () => {
  const { category } = useParams();
  const name = CATEGORY_TITLES[category] || "Продукти";
  const filteredProducts = products.filter(
    (product) => product.type === category
  );
  return (
    <>
      <CategorySection>
        <CategoryContainer>
          <CategoryTitle  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>{name}</CategoryTitle>
          <CakesList>
            {filteredProducts.map((product) => (
              <CakeCard key={product.id}  initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -10,
              rotate: -0.6,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}>
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

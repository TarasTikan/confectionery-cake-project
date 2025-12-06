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

import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategory, getCartItems } from "../../redux/selectors";

import { categoryProducts } from "../../redux/filtersSlice";
import { productsCategory } from "../../redux/constans";
import { addCart } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { ModalCart } from "../../components/modalCart/modalCart";

const getVisibleProducts = (product, category) => {
  switch (category) {
    case productsCategory.tarts:
      return product.filter(item => item.type === productsCategory.tarts);
    case productsCategory.cakes:
      return product.filter(item => item.type === productsCategory.cakes);
    case productsCategory.cupcakes:
      return product.filter(item => item.type === productsCategory.cupcakes);
    case productsCategory.macarons:
      return product.filter(item => item.type === productsCategory.macarons);
    case productsCategory.allProducts:
      return product;
    default:
      return product;
  }
}
export const ProductMenuPage = () => {
  const products = useSelector(getProducts)
  const category = useSelector(getCategory)
  const cart = useSelector(getCartItems)
  const dispatch = useDispatch();
  const visibleProducts = getVisibleProducts(products, category);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);
  const handleToggleHover = () => {
    setIsOpen(!isOpen);
  };

  const handleCakesCart = (product) => {

    if (cart.find(item => item.id === product.id)) {


      dispatch(addCart({ ...product, quantity: 1 }))
      return;
    }

    dispatch(addCart(product))
  };


  const handleCategoryCakes = type => dispatch(categoryProducts(type))

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
            Наше меню
          </CategoryTitle>
          <CategoryFilterBar>
            <CategoryFilterItem active={category === "allProducts" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/allProducts" onClick={() => handleCategoryCakes(productsCategory.allProducts)}>
                Усі
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "cakes" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/cakes" onClick={() => handleCategoryCakes(productsCategory.cakes)}>Торти</CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "cupcakes" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/cupcakes" onClick={() => handleCategoryCakes(productsCategory.cupcakes)}>
                Капкейки
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "macarons" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/macarons" onClick={() => handleCategoryCakes(productsCategory.macarons)}>
                Макарони
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem active={category === "tarts" ? "true" : "false"}>
              <CategoryFilterLink to="/menu/tarts" onClick={() => handleCategoryCakes(productsCategory.tarts)}>Тарти</CategoryFilterLink>
            </CategoryFilterItem>
          </CategoryFilterBar>
          <CakesList>
            {visibleProducts.map((product) => (
              <CakeCard
                key={product.id}
                onClick={() => {
                  handleCakesCart(product);
                  handleToggleHover();
                }}

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
        <ModalCart open={isOpen} clouseModal={handleToggleHover} />
      </CategorySection>
    </>
  );
};

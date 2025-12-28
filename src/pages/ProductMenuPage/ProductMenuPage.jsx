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
import {
  getCategory,
} from "../../redux/selectors";
import { getProducts } from "../../redux/products/selectors";
import { categoryProducts } from "../../redux/filter/filtersSlice";
import { productsCategory } from "../../redux/constans";
import { useEffect } from "react";
import { ModalCart } from "../../components/modalCart/modalCart";
import { Link } from "react-router-dom";
import { getCartId, getCartItems, getMode, openCartItems } from "../../redux/cart/selectors";
import { addItemToCartAuth, addItemToCartGuest, toggleCart } from "../../redux/cart/operations";

const getVisibleProducts = (product, category) => {
  switch (category) {
    case productsCategory.tarts:
      return product.filter((item) => item.type === productsCategory.tarts);
    case productsCategory.cakes:
      return product.filter((item) => item.type === productsCategory.cakes);
    case productsCategory.cupcakes:
      return product.filter((item) => item.type === productsCategory.cupcakes);
    case productsCategory.macarons:
      return product.filter((item) => item.type === productsCategory.macarons);
    case productsCategory.allProducts:
      return product;
    default:
      return product;
  }
};
export const ProductMenuPage = () => {
  const products = useSelector(getProducts);
  const category = useSelector(getCategory);
  const cart = useSelector(getCartItems);
  const isOpenCart = useSelector(openCartItems);
    const modeCart = useSelector(getMode)
     const cartId = useSelector(getCartId)
  const dispatch = useDispatch();
  const visibleProducts = getVisibleProducts(products, category);

  useEffect(() => {
    if (isOpenCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpenCart]);

  const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
  const handleCategoryCakes = (type) => dispatch(categoryProducts(type));

  const handleCakesCart = (product) => {
    if(modeCart === "guest") {
if (cart.find((item) => item.id === product.id)) {
      dispatch(addItemToCartGuest(product));
      return;
    }
    dispatch(addItemToCartGuest(product));
    }else {
       dispatch(addItemToCartAuth(cartId, product));
    }
  };

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
            <CategoryFilterItem
              active={category === "allProducts" ? "true" : "false"}
            >
              <CategoryFilterLink
                to="/menu/allProducts"
                onClick={() =>
                  handleCategoryCakes(productsCategory.allProducts)
                }
              >
                Усі
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem
              active={category === "cakes" ? "true" : "false"}
            >
              <CategoryFilterLink
                to="/menu/cakes"
                onClick={() => handleCategoryCakes(productsCategory.cakes)}
              >
                Торти
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem
              active={category === "cupcakes" ? "true" : "false"}
            >
              <CategoryFilterLink
                to="/menu/cupcakes"
                onClick={() => handleCategoryCakes(productsCategory.cupcakes)}
              >
                Капкейки
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem
              active={category === "macarons" ? "true" : "false"}
            >
              <CategoryFilterLink
                to="/menu/macarons"
                onClick={() => handleCategoryCakes(productsCategory.macarons)}
              >
                Макарони
              </CategoryFilterLink>
            </CategoryFilterItem>
            <CategoryFilterItem
              active={category === "tarts" ? "true" : "false"}
            >
              <CategoryFilterLink
                to="/menu/tarts"
                onClick={() => handleCategoryCakes(productsCategory.tarts)}
              >
                Тарти
              </CategoryFilterLink>
            </CategoryFilterItem>
          </CategoryFilterBar>
          <CakesList>
            {visibleProducts.map((product) => (
              <CakeCard
                key={product.id}
              >
                <Link to={`${product.id}`}>
                <CakeImage src={product.image_url} />
                </Link>
                <WrapCakeInfo>
                  <CakeName to={`${product.id}`}>{product.title}</CakeName>
                  <CakePrice>{product.price} грн</CakePrice>
                  <BuyButton onClick={() => {
                  handleCakesCart(product);
                  handleToggleHover();
                }}>Додати до кошика</BuyButton>
                </WrapCakeInfo>
              </CakeCard>
            ))}
          </CakesList>
        </CategoryContainer>
        <ModalCart />
      </CategorySection>
    </>
  );
};

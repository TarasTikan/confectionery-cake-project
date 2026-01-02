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
  WrapProductAndFilters,
  EmptyState,
  Emoji,
  Title,
  Text,
  ResetButton,
} from "./ProductMenuPage.styled";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/filter/selectors";
import { categoryProducts, clearFilter } from "../../redux/filter/filtersSlice";
import { productsCategory } from "../../redux/filter/constans";
import { useEffect } from "react";
import { ModalCart } from "../../components/modalCart/modalCart";
import { Link } from "react-router-dom";
import {
  getCartId,
  getCartItems,
  getMode,
  openCartItems,
} from "../../redux/cart/selectors";
import { addItemToCartAuth } from "../../redux/cart/operations";
import { addCart, toggleCart } from "../../redux/cart/cartSlice";
import {
  getPage,
  getPageCount,
  getPaginatedProducts,
} from "../../redux/pagination/selectors";
import { setPage } from "../../redux/pagination/paginationSlice";
import { Filters } from "../../components/Filters/Filters";

export const ProductMenuPage = () => {
  const products = useSelector(getPaginatedProducts);
  const pageCount = useSelector(getPageCount);
  const category = useSelector(getCategory);
  const cart = useSelector(getCartItems);
  const isOpenCart = useSelector(openCartItems);
  const modeCart = useSelector(getMode);
  const cartId = useSelector(getCartId);
  const page = useSelector(getPage);
  const dispatch = useDispatch();

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
    if (modeCart === "guest") {
      if (cart.find((item) => item.id === product.id)) {
        dispatch(addCart(product));
        return;
      }
      dispatch(addCart(product));
    } else {
      dispatch(addItemToCartAuth({ cartId, product }));
    }
  };

  useEffect(() => {
    dispatch(setPage(1));
  }, [category, dispatch]);

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
          <WrapProductAndFilters>
            <Filters />
            <CakesList>
              {products.length === 0 ? (
                <EmptyState>
                  <Emoji>🍩</Emoji>
                  <Title>Десертів не знайдено</Title>
                  <Text>
                    Спробуйте змінити фільтри або переглянути всі солодощі
                  </Text>
                  <ResetButton onClick={(e) => dispatch(clearFilter())}>
                    Скинути фільтри
                  </ResetButton>
                </EmptyState>
              ) : (
                products.map((product) => (
                  <CakeCard key={product.id}>
                    <Link to={`${product.id}`}>
                      <CakeImage src={product.image_url} />
                    </Link>
                    <WrapCakeInfo>
                      <CakeName to={`${product.id}`}>{product.title}</CakeName>
                      <CakePrice>{product.price} грн</CakePrice>
                      <BuyButton
                        onClick={() => {
                          handleCakesCart(product);
                          handleToggleHover();
                        }}
                      >
                        Додати до кошика
                      </BuyButton>
                    </WrapCakeInfo>
                  </CakeCard>
                ))
              )}
            </CakesList>
          </WrapProductAndFilters>

          {!products.length || (
            <Pagination
              count={pageCount}
              page={page}
              onChange={(_, value) => dispatch(setPage(value))}
              size="small"
            />
          )}
        </CategoryContainer>
        <ModalCart />
      </CategorySection>
    </>
  );
};

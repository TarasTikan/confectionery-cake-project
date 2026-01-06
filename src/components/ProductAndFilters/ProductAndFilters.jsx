import { Link } from "react-router-dom";
import { Filters } from "../Filters/Filters";
import {
  BuyButton,
  CakeCard,
  CakeImage,
  CakeName,
  CakePrice,
  CakesList,
  Count,
  Emoji,
  EmptyState,
  ResetButton,
  Text,
  Title,
  WrapCakeInfo,
  WrapProductAndFilters,
} from "./ProductAndFilters.styled";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../redux/filter/filtersSlice";
import { getPage, getPageCount, getPaginatedProducts } from "../../redux/pagination/selectors";
import { useCartActions } from "../../hooks/useCartActions";
import { setPage } from "../../redux/pagination/paginationSlice";
import { Pagination } from "@mui/material";



export const ProductAndFilters = () => {
  const dispatch = useDispatch();
  const products = useSelector(getPaginatedProducts);
  const pageCount = useSelector(getPageCount);
  const page = useSelector(getPage);
  const { addToCartAndOpen } = useCartActions();
  
  return (
    <>
      <WrapProductAndFilters>
        <Filters />
        <div>
          <Count>Знайдено: <b>{products.productCount} товари</b></Count>
          <CakesList>
            {products.paginatinProducts.length === 0 ? (
              <EmptyState>
                <Emoji>🍩</Emoji>
                <Title>Десертів не знайдено</Title>
                <Text>Спробуйте змінити фільтри або переглянути всі солодощі</Text>
                <ResetButton onClick={(e) => dispatch(clearFilter())}>
                  Скинути фільтри
                </ResetButton>
              </EmptyState>
            ) : (
              products.paginatinProducts.map((product) => (
                <CakeCard key={product.id}>
                  <Link to={`${product.id}`}>
                    <CakeImage src={product.image_url} loading="lazy" />
                  </Link>
                  <WrapCakeInfo>
                    <CakeName to={`${product.id}`}>{product.title}</CakeName>
                    <CakePrice>{product.price} грн</CakePrice>
                    <BuyButton onClick={() => addToCartAndOpen(product)}>
                      Додати до кошика
                    </BuyButton>
                  </WrapCakeInfo>
                </CakeCard>
              ))
            )}
          </CakesList>
        </div>
      </WrapProductAndFilters>
      {!products.paginatinProducts.length || (
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => dispatch(setPage(value))}
          size="small"
        />
      )}
    </>
  );
};

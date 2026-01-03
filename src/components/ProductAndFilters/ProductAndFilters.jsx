import { Link } from "react-router-dom";
import { Filters } from "../Filters/Filters";
import {
  BuyButton,
  CakeCard,
  CakeImage,
  CakeName,
  CakePrice,
  CakesList,
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
import { getPaginatedProducts } from "../../redux/pagination/selectors";
import { useCartActions } from "../../hooks/useCartActions";


export const ProductAndFilters = () => {
  const dispatch = useDispatch();
  const products = useSelector(getPaginatedProducts);
  const { addToCartAndOpen } = useCartActions();
  return (
    <WrapProductAndFilters>
      <Filters />
      <CakesList>
        {products.length === 0 ? (
          <EmptyState>
            <Emoji>🍩</Emoji>
            <Title>Десертів не знайдено</Title>
            <Text>Спробуйте змінити фільтри або переглянути всі солодощі</Text>
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
                <BuyButton onClick={() => addToCartAndOpen(product)}>
                  Додати до кошика
                </BuyButton>
              </WrapCakeInfo>
            </CakeCard>
          ))
        )}
      </CakesList>
    </WrapProductAndFilters>
  );
};

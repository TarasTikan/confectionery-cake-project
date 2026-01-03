import { useParams } from "react-router-dom";
import {
  AddToCartBtn,
  ButtonsWrap,
  BuyNowBtn,
  ProductDescription,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapInfo,
} from "./ProductDetails.styled";
import { useSelector } from "react-redux";
import { getProductById } from "../../redux/products/selectors";

import { useCartActions } from "../../hooks/useCartActions";

export const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const { addToCart, addToCartAndOpen } = useCartActions();
  return (
    <ProductWrapInfo>
      <ProductImg src={product?.image_url} alt={product?.description} />
      <div>
        <ProductTitle>{product?.title}</ProductTitle>
        <ProductPrice>{product?.price} грн</ProductPrice>
        <ProductDescription>{product?.description}</ProductDescription>
        <ProductInfo>
          <strong>Об'єм:</strong> {product?.weight}
        </ProductInfo>
        <ProductInfo>
          <strong>Смак:</strong> {product?.taste}
        </ProductInfo>
        <ProductInfo>
          <strong>Категорія:</strong> {product?.category}
        </ProductInfo>
        <ButtonsWrap>
          <AddToCartBtn type="button" onClick={() => addToCartAndOpen(product)}>
            Додати до кошика
          </AddToCartBtn>
          <BuyNowBtn to={`/order`} onClick={() => addToCart(product)}>
            Купити зараз
          </BuyNowBtn>
        </ButtonsWrap>
      </div>
    </ProductWrapInfo>
  );
};

import { useParams } from "react-router-dom";
import {
  RelatedButton,
  RelatedCard,
  RelatedImage,
  RelatedList,
  RelatedName,
  RelatedPrice,
  RelatedTitle,
  WrapInfo,
} from "./RelatedProducts.styled";
import { useSelector } from "react-redux";
import { getProductById, getRelatedProducts } from "../../redux/products/selectors";
import { useCartActions } from "../../hooks/useCartActions";

export const RelatedProducts = () => {
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const { addToCartAndOpen } = useCartActions();
  const relatedProducts = useSelector((state => getRelatedProducts(state, product)));
  return (
    <>
      {relatedProducts.length < 0 || (
        <>
          <RelatedTitle>Схожі товари</RelatedTitle>
          <RelatedList>
            {relatedProducts.map((item) => (
              <RelatedCard key={item.id}>
                <RelatedImage src={item?.image_url} alt="торт" />
                <WrapInfo>
                  <RelatedName to={`/menu/allProducts/${item.id}`}>
                    {item.title}
                  </RelatedName>
                  <RelatedPrice>{item.price} грн</RelatedPrice>
                  <RelatedButton onClick={() => addToCartAndOpen(item)}>
                    додати до кошику
                  </RelatedButton>
                </WrapInfo>
              </RelatedCard>
            ))}
          </RelatedList>
        </>
      )}
    </>
  );
};

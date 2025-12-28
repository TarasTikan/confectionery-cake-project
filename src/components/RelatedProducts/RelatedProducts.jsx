import { useParams } from "react-router-dom"
import { RelatedButton, RelatedCard, RelatedImage, RelatedList, RelatedName, RelatedPrice, RelatedTitle, WrapInfo } from "./RelatedProducts.styled"
import { useDispatch, useSelector } from "react-redux"
import { getCartId, getCartItems, getMode, openCartItems } from "../../redux/cart/selectors"
import { getProducts } from "../../redux/products/selectors"

import { addItemToCartAuth, addItemToCartGuest, toggleCart } from "../../redux/cart/operations"


export const RelatedProducts = () => {
  const { id } = useParams()
  const products = useSelector(getProducts)
  const dispatch = useDispatch();
  const productFind = products.find(item => item.id === id)
  const cart = useSelector(getCartItems);
  const modeCart = useSelector(getMode)
  const cartId = useSelector(getCartId)
  const isOpenCart = useSelector(openCartItems);
  const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
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


  const relatedProducts = products.filter(item => item.category === productFind.category && item.id !== productFind.id).slice(0, 4)
  return (
    <>
      {relatedProducts.length < 0 || <><RelatedTitle>Схожі товари</RelatedTitle>
        <RelatedList>
          {relatedProducts.map(item => (
            <RelatedCard key={item.id}  >
              <RelatedImage src={item?.image_url} alt="торт" />
              <WrapInfo>
                <RelatedName to={`/menu/allProducts/${item.id}`}>{item.title}</RelatedName>
                <RelatedPrice>{item.price} грн</RelatedPrice>
                <RelatedButton onClick={() => {
                  handleCakesCart(item);
                  handleToggleHover();
                }}>додати до кошику</RelatedButton>
              </WrapInfo>
            </RelatedCard>
          ))}
        </RelatedList></>}

    </>
  )
}
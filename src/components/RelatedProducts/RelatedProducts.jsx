import { useParams } from "react-router-dom"
import { RelatedButton, RelatedCard, RelatedImage, RelatedList, RelatedName, RelatedPrice, RelatedTitle, WrapInfo } from "./RelatedProducts.styled"
import { useDispatch, useSelector } from "react-redux"
import { getCartItems, getProducts, openCartItems } from "../../redux/selectors"
import { addCart, toggleCart } from "../../redux/cartSlice"


export const RelatedProducts = () => {
  const { id } = useParams()
  const products = useSelector(getProducts)
  const dispatch = useDispatch();
  const productFind = products.find(item => item.id === Number(id))
  const cart = useSelector(getCartItems);
  const isOpenCart = useSelector(openCartItems);
  const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
  const handleCakesCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      dispatch(addCart({ ...product, quantity: 1 }));
      return;
    }
    dispatch(addCart(product));
  };


  const relatedProducts = products.filter(item => item.category === productFind.category).slice(0, 6)
  return (
    <>
      {relatedProducts.length < 0 || <><RelatedTitle>Схожі товари</RelatedTitle>
        <RelatedList>
          {relatedProducts.map(item => (
            <RelatedCard key={item.id}  >
              <RelatedImage src={item.image} alt="торт" />
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
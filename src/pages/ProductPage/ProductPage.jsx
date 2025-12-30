import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCartItems, openCartItems } from "../../redux/cart/selectors"
import { getProducts } from "../../redux/products/selectors"
import { ProductPageSection, Container, WrapInfo, ImageDessert, ProductTitle, ProductPrice, ProductShortDescription, ProductInfo, ButtonsWrap, AddToCartBtn, BuyNowBtn } from "./ProductPage.styled"
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts"
import { FooterCake } from "../../components/footer/footer"
import { getCartId, getMode } from "../../redux/cart/selectors"
import { addItemToCartAuth } from "../../redux/cart/operations"
import { addCart, toggleCart } from "../../redux/cart/cartSlice"

export const ProductPage = () => {
    const { id } = useParams()
    const products = useSelector(getProducts)
    const productFind = products.find(item => item.id === id)
  const modeCart = useSelector(getMode)
  const cartId = useSelector(getCartId)

    const dispatch = useDispatch();
    const cart = useSelector(getCartItems);
    const isOpenCart = useSelector(openCartItems);
    const handleToggleHover = () => dispatch(toggleCart(!isOpenCart));
    const handleCakesCart = (product) => {
      if(modeCart === "guest") {
  if (cart.find((item) => item.id === product.id)) {
        dispatch(addCart(product));
        return;
      }
      dispatch(addCart(product));
      }else {
         dispatch(addItemToCartAuth({cartId, product}));
      }
    };
  

    return (
        <>
        <main>
        <ProductPageSection>
            <Container>
                <WrapInfo>
                    <ImageDessert src={productFind?.image_url} alt={productFind?.description} />
                    <div>
                        <ProductTitle>{productFind?.title}</ProductTitle>
                        <ProductPrice>{productFind?.price} грн</ProductPrice>
                        <ProductShortDescription>{productFind?.description}</ProductShortDescription>
                        <ProductInfo><strong>Об'єм:</strong> {productFind?.weight}</ProductInfo>
                        <ProductInfo><strong>Смак:</strong> {productFind?.taste}</ProductInfo>
                        <ProductInfo><strong>Категорія:</strong> {productFind?.category}</ProductInfo>
                        <ButtonsWrap>
                            <AddToCartBtn type="button" onClick={() => {
                                handleCakesCart(productFind);
                                handleToggleHover();
                            }}>Додати до кошика</AddToCartBtn>
                            <BuyNowBtn to={`/order`} onClick={() => handleCakesCart(productFind)}>Купити зараз</BuyNowBtn>
                        </ButtonsWrap>
                    </div>
                </WrapInfo>
                <RelatedProducts />
            </Container>
        </ProductPageSection>
        </main>
        <FooterCake/>
        </>
    )
}
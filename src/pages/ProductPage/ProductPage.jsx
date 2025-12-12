import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCartItems, getProducts, openCartItems } from "../../redux/selectors"
import { ProductPageSection, Container, WrapInfo, ImageDessert, ProductTitle, ProductPrice, ProductShortDescription, ProductInfo, ButtonsWrap, AddToCartBtn, BuyNowBtn } from "./ProductPage.styled"
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts"
import { addCart, toggleCart } from "../../redux/cartSlice"
import { FooterCake } from "../../components/footer/footer"

export const ProductPage = () => {
    const { id } = useParams()
    const products = useSelector(getProducts)
    const productFind = products.find(item => item.id === Number(id))


    const dispatch = useDispatch();
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


    return (
        <>
        <main>
        <ProductPageSection>
            <Container>
                <WrapInfo>
                    <ImageDessert src={productFind.image} alt={productFind.description} />
                    <div>
                        <ProductTitle>{productFind.title}</ProductTitle>
                        <ProductPrice>{productFind.price} грн</ProductPrice>
                        <ProductShortDescription>{productFind.description}</ProductShortDescription>
                        <ProductInfo><strong>Об'єм:</strong> 1 кг</ProductInfo>
                        <ProductInfo><strong>Смак:</strong> {productFind.taste}</ProductInfo>
                        <ProductInfo><strong>Категорія:</strong> {productFind.category}</ProductInfo>
                        <ButtonsWrap>
                            <AddToCartBtn type="button" onClick={() => {
                                handleCakesCart(productFind);
                                handleToggleHover();
                            }}>Додати до кошика</AddToCartBtn>
                            <BuyNowBtn to={`/order`}>Купити зараз</BuyNowBtn>
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
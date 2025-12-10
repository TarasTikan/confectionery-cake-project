import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getProducts } from "../../redux/selectors"
import { ProductPageSection,Container,WrapInfo,ImageDessert,ProductTitle,ProductPrice,ProductShortDescription,ProductInfo,ButtonsWrap,AddToCartBtn,BuyNowBtn } from "./ProductPage.styled"

export const ProductPage = () => {
    const {id} = useParams()
    const products = useSelector(getProducts)
    const productFind = products.find(item => item.id === Number(id))

    return (
        <ProductPageSection>
            <Container>
                <WrapInfo>
                    <ImageDessert src={productFind.image} alt={productFind.description}/>
                    <div>
                        <ProductTitle>{productFind.title}</ProductTitle>
                        <ProductPrice>{productFind.price} грн</ProductPrice>
                        <ProductInfo>Об'єм: 1кг</ProductInfo>
                        <ProductInfo>Смак: {productFind.taste}</ProductInfo>
                        <ProductInfo>Категорія: {productFind.category}</ProductInfo>
                        <ButtonsWrap>
                            <AddToCartBtn type="button">Додати до кошика</AddToCartBtn>
                            <BuyNowBtn type="button">Купити зараз</BuyNowBtn>
                        </ButtonsWrap>
                    </div>
                </WrapInfo>
                <div>
                    <h2>Про десерт</h2>
                    <ProductShortDescription>{productFind.description}</ProductShortDescription>
                </div>
            </Container>
        </ProductPageSection>
    )
}
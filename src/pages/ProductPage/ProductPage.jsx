import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getProducts } from "../../redux/selectors"
import { ProductPageSection,Container,WrapInfo,ImageDessert,ProductTitle,ProductPrice,ProductShortDescription,ProductInfo,ButtonsWrap,AddToCartBtn,BuyNowBtn } from "./ProductPage.styled"
import { RelatedProducts } from "../../components/RelatedProducts/RelatedProducts"

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
                        <ProductShortDescription>{productFind.description}</ProductShortDescription>
                        <ProductInfo><strong>Об'єм:</strong> 1 кг</ProductInfo>
                        <ProductInfo><strong>Смак:</strong> {productFind.taste}</ProductInfo>
                        <ProductInfo><strong>Категорія:</strong> {productFind.category}</ProductInfo>
                        <ButtonsWrap>
                            <AddToCartBtn type="button">Додати до кошика</AddToCartBtn>
                            <BuyNowBtn type="button">Купити зараз</BuyNowBtn>
                        </ButtonsWrap>
                    </div>
                </WrapInfo>
               <RelatedProducts/>
            </Container>
        </ProductPageSection>
    )
}
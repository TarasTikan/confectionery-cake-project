import {  useParams } from "react-router-dom"
import { RelatedButton, RelatedCard, RelatedImage, RelatedList, RelatedName, RelatedPrice, RelatedTitle, WrapInfo } from "./RelatedProducts.styled"
import { useSelector } from "react-redux"
import { getProducts } from "../../redux/selectors"


export const RelatedProducts = () => {
    const {id} = useParams()
    const products = useSelector(getProducts)
    const productFind = products.find(item => item.id === Number(id))
    const relatedProducts = products.filter(item => item.category === productFind.category).slice(0,6)
    return (
        <>
        <RelatedTitle>Схожі товари</RelatedTitle>
         <RelatedList>
        {relatedProducts.map(item => (
          <RelatedCard  key={item.id}  >
                        <RelatedImage  src={item.image} alt="торт" />
                        <WrapInfo>
                          <RelatedName>{item.title}</RelatedName>
                          <RelatedPrice>{item.price} грн</RelatedPrice>
                          <RelatedButton>Переглянути товар</RelatedButton>
                        </WrapInfo>
                      </RelatedCard>
        ))}
      </RelatedList>
      </>
    )
}
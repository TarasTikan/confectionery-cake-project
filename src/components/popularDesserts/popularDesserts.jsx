import data from '../../data/data'
// import data from '../../img/tortOne.jpg'
import { PopularDessertsSection, Container, PopularDessertsTitle, PopularDessertsList, PopularDessertsCard, PopularDessertsImage, WrapInfo, ProductTitle, ProductPrice, ProductButton } from "./popularDesserts.styled"
export const PopularDesserts = () => {
    return (
        <PopularDessertsSection>
            <Container>
                <PopularDessertsTitle>Популярні десерти</PopularDessertsTitle>
                <PopularDessertsList>
                    {data.map(item => (<PopularDessertsCard key={item.id}><PopularDessertsImage src={item.image} alt='торт' /> <WrapInfo><ProductTitle>{item.title}</ProductTitle><ProductPrice>{item.price}</ProductPrice><ProductButton>Замовити</ProductButton></WrapInfo></PopularDessertsCard>))}
                </PopularDessertsList>
            </Container>
        </PopularDessertsSection>
    )
}
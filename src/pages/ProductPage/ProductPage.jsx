import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getProducts } from "../../redux/selectors"

export const ProductPage = () => {
    const {id} = useParams()
    const products = useSelector(getProducts)
    const productFind = products.find(item => item.id === Number(id))

    return (
        <section>
            <div>
                <div>
                    <img src={productFind.image} alt={productFind.description}/>
                    <div>
                        <h1>{productFind.title}</h1>
                        <h2>{productFind.price} грн</h2>
                        <p>Об'єм: 1кг</p>
                        <p>Смак: {productFind.taste}</p>
                        <p>Категорія: {productFind.category}</p>
                        <div>
                            <button type="button">Додати до кошика</button>
                            <button type="button">Купити зараз</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Про десерт</h2>
                    <p>{productFind.description}</p>
                </div>
            </div>
        </section>
    )
}
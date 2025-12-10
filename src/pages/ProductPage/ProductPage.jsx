import { useParams } from "react-router-dom"
import { getProductById } from "../../data/data"

export const ProductPage = () => {
    const {id} = useParams()
    const product = getProductById(id)
    return (
        <section>
            <div>
                <div>
                    <img></img>
                    <div>
                        <h1></h1>
                        <h2></h2>
                        <p></p>
                        <p></p>
                        <p></p>
                        <div>
                            <button type="button">Додати до кошика</button>
                            <button type="button">Купити зараз</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Про десерт</h2>
                    <p></p>
                </div>
            </div>
        </section>
    )
}
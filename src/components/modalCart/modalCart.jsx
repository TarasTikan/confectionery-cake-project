import { useSelector } from "react-redux"
import { CartOverlay,CartModal,CartTitle,CartHeader, CloseBtn,ItemName, CartItem,ItemImage,ItemInfo, CartList, ItemPrice,QuantityControl,QuantityBtn,ContinueButton,CheckoutButton} from "./modalCart.styled"
import { getCartItems } from "../../redux/selectors"

export const ModalCart = ({clouseModal, open}) => {
    const cartItem = useSelector(getCartItems)
    const handleClouse = () => clouseModal()
    
    return (
        <CartOverlay open={open}>
        <CartModal open={open}>
                <CartHeader>
                <CartTitle>Ваше замовлення</CartTitle>
                <CloseBtn onClick={handleClouse}>X</CloseBtn>
                </CartHeader>
                <CartList>
                    {cartItem.map(item => ( <CartItem>
                        <ItemImage src={item.image}/>
                        <ItemInfo>
                            <ItemName>{item.description}</ItemName>
                            <ItemPrice>{item.price} грн</ItemPrice>
                        </ItemInfo>
                        <QuantityControl>
                            <QuantityBtn type="button">-</QuantityBtn>
                            <p>{item.quantity}</p>
                            <QuantityBtn type="button">+</QuantityBtn>
                        </QuantityControl>
                    </CartItem>))}
                   
                </CartList>
                <CheckoutButton type="button">Оформити замовлення</CheckoutButton>
                <ContinueButton type="button" onClick={handleClouse}>Повернутись до покупок</ContinueButton>

        </CartModal>
        </CartOverlay>
    )
}
import { useDispatch, useSelector } from "react-redux";
import { Container, OrderSection, FormTitle,Form,Input, PageTitle, SubmitButton,WrapInfoOrder, SummaryBox, TitleListOrder, ListOrder, SummaryText, CartItem, ItemImage, ItemInfo, ItemName, ItemPrice, QuantityControl, QuantityBtn, DeleteItemsBtn } from "./OrderPage.styled"
import { getCartItems } from "../../redux/selectors";
import { decrementQuantity, deleteCart, incrementQuantity } from "../../redux/cartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FooterCake } from "../../components/footer/footer";
import { DeleteIcon } from "../../icons/deleteIcon";

export const OrderPage = () => {
    const cart = useSelector(getCartItems);
     const dispatch = useDispatch();
    const navigate = useNavigate();

      const hadleDeleteItem = (item) => dispatch(deleteCart(item));
      const handleIncrementQuantity = (item) => dispatch(incrementQuantity(item));
      const handleDecrementQuantity = (item) => dispatch(decrementQuantity(item));
      useEffect(()=>{
        if (cart.length === 0) {
          navigate('/menu/allProducts', { replace: true });
        }
      },[cart,navigate])
    return(
      <>
        <main>
            <OrderSection>
                <Container>
                    <PageTitle>Оформлення замовлення</PageTitle>
                    <WrapInfoOrder>
                        <Form>
                            <FormTitle>Інформація про покупця</FormTitle>
                            <label>
                                Ім'я та прізвище отримувача
                                <Input type="text"/>
                            </label>
                             <label>
                                Телефон
                                <Input type="number"/>
                            </label>
                             <label>
                                Електронна пошта
                                <Input type="email"/>
                            </label>
                             <label>
                                Місто
                                <Input type="text"/>
                            </label>
                             <label>
                                Адреса отримувача
                                <Input type="text"/>
                            </label>
                            <SubmitButton>Оформити замовлення</SubmitButton>
                        </Form>
                        <SummaryBox>
                            <TitleListOrder>Ваше замовлення</TitleListOrder>
                            <ListOrder>
                               {cart.map((item) => (
                                          <CartItem key={item.id}>
                                            <ItemImage src={item.image} />
                                            <ItemInfo>
                                              <ItemName to={`/menu/allProducts/${item.id}`}>{item.title}</ItemName>
                                              <ItemPrice>{item.price} грн</ItemPrice>
                                            </ItemInfo>
                                            <QuantityControl>
                                                <DeleteItemsBtn type="button" onClick={()=> hadleDeleteItem(item.id)}><DeleteIcon/></DeleteItemsBtn>
                                              <QuantityBtn
                                                type="button"
                                                onClick={() => handleDecrementQuantity(item)}
                                              >
                                                -
                                              </QuantityBtn>
                                              <p>{item.quantity}</p>
                                              <QuantityBtn
                                                type="button"
                                                onClick={() => handleIncrementQuantity(item)}
                                              >
                                                +
                                              </QuantityBtn>
                                            </QuantityControl>
                                          </CartItem>
                                        ))}
                            </ListOrder>
                            <SummaryText>Всього: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} грн</SummaryText>
                        </SummaryBox>
                    </WrapInfoOrder>
                </Container>
            </OrderSection>
        </main>
        <FooterCake/>
        </>
    )
}
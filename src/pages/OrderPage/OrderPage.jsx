import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  OrderSection,
  FormTitle,
  Form,
  Input,
  PageTitle,
  SubmitButton,
  WrapInfoOrder,
  SummaryBox,
  TitleListOrder,
  ListOrder,
  SummaryText,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  QuantityControl,
  QuantityBtn,
  DeleteItemsBtn,
} from "./OrderPage.styled";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FooterCake } from "../../components/footer/footer";
import { DeleteIcon } from "../../icons/deleteIcon";
import { getMode,getCartItems } from "../../redux/cart/selectors";
import {
  removeItemFromCartAuth,
  updateCartItemQtyAuth,
} from "../../redux/cart/operations";
import { decrementQuantity, deleteCart, incrementQuantity } from "../../redux/cart/cartSlice";
import { selectAuthUser } from "../../redux/auth/selectors";

export const OrderPage = () => {
  const cart = useSelector(getCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuthUser)
  const modeCart = useSelector(getMode);
  const hadleDeleteItem = (item) => {
    if (modeCart === "guest") {
      dispatch(deleteCart(item));
    } else {
      dispatch(removeItemFromCartAuth(item));
    }
  };
console.log(isAuth)
  const handleIncrementQuantity = (item) => {
    if (modeCart === "guest") {
      dispatch(incrementQuantity(item));
    } else {
      dispatch(updateCartItemQtyAuth({itemId: item.id, quantity: item.quantity, incrementOrDecrement: true}));
    }
  };
  const handleDecrementQuantity = (item) => {
    if (modeCart === "guest") {
      dispatch(decrementQuantity(item));
    } else {
 dispatch(updateCartItemQtyAuth({itemId: item.id, quantity: item.quantity, incrementOrDecrement: false}));
    }
  };
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/menu/allProducts", { replace: true });
    }
  }, [cart, navigate]);
  return (
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
                  <Input type="text" />
                </label>
                <label>
                  Телефон
                  <Input type="number" />
                </label>
                <label>
                  Електронна пошта
                  <Input type="email" />
                </label>
                <label>
                  Місто
                  <Input type="text" />
                </label>
                <label>
                  Адреса отримувача
                  <Input type="text" />
                </label>
                {isAuth ? <SubmitButton>Оформити замовлення</SubmitButton> : <SubmitButton>Оформити замовлення як гість</SubmitButton>}   
              </Form>
              <SummaryBox>
                <TitleListOrder>Ваше замовлення</TitleListOrder>
                <ListOrder>
                  {cart.map((item) => (
                    <CartItem key={item.id}>
                      <ItemImage src={item.image_url} />
                      <ItemInfo>
                        <ItemName to={`/menu/allProducts/${item.id}`}>
                          {item.title}
                        </ItemName>
                        <ItemPrice>{item.price} грн</ItemPrice>
                      </ItemInfo>
                      <QuantityControl>
                        <DeleteItemsBtn
                          type="button"
                          onClick={() => hadleDeleteItem(item.id)}
                        >
                          <DeleteIcon />
                        </DeleteItemsBtn>
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
                <SummaryText>
                  Всього:
                  {cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                  грн
                </SummaryText>
              </SummaryBox>
            </WrapInfoOrder>
          </Container>
        </OrderSection>
      </main>
      <FooterCake />
    </>
  );
};

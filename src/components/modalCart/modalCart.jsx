import { useDispatch, useSelector } from "react-redux";
import {
  CartOverlay,
  CartModal,
  CartTitle,
  CartHeader,
  CloseBtn,
  ItemName,
  CartItem,
  ItemImage,
  ItemInfo,
  CartList,
  ItemPrice,
  QuantityControl,
  QuantityBtn,
  ContinueButton,
  CheckoutButton,
} from "./modalCart.styled";
import { getCartItems, openCartItems } from "../../redux/selectors";
import {
  incrementQuantity,
  decrementQuantity,
  toggleCart,
} from "../../redux/cartSlice";
import { useEffect } from "react";

export const ModalCart = () => {
  const isOpenCart = useSelector(openCartItems);
  const cart = useSelector(getCartItems);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (item) => dispatch(incrementQuantity(item));
  const handleDecrementQuantity = (item) => dispatch(decrementQuantity(item));
  const handleClouse = () => dispatch(toggleCart(!isOpenCart));

  useEffect(() => {
    if (isOpenCart && cart.length === 0) {
      dispatch(toggleCart(!isOpenCart));
    }
  }, [cart, isOpenCart]);

  return (
    <CartOverlay open={isOpenCart} onClick={handleClouse}>
      <CartModal open={isOpenCart} onClick={(e) => e.stopPropagation()}>
        <CartHeader>
          <CartTitle>Ваше замовлення</CartTitle>
          <CloseBtn onClick={handleClouse}>X</CloseBtn>
        </CartHeader>
        <CartList>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} />
              <ItemInfo>
                <ItemName>{item.description}</ItemName>
                <ItemPrice>{item.price} грн</ItemPrice>
              </ItemInfo>
              <QuantityControl>
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
        </CartList>
        <CheckoutButton type="button">Оформити замовлення</CheckoutButton>
        <ContinueButton type="button" onClick={handleClouse}>
          Повернутись до покупок
        </ContinueButton>
      </CartModal>
    </CartOverlay>
  );
};

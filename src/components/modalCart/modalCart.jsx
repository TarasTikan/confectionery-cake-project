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
  WrapPrice,
  ClearButton,
  TitlePrice,
  DeleteItemsBtn,
} from "./modalCart.styled";
import {
  getCartId,
  getCartItems,
  getMode,
  openCartItems,
} from "../../redux/cart/selectors";
import {
  clearCartAuth,
  clearCartGuest,
  decrementQuantityGuest,
  incrementQuantityGuest,
  removeItemFromCartAuth,
  removeItemFromCartGuest,
  toggleCart,
  updateCartItemQtyAuth,
} from "../../redux/cart/operations";
import { useEffect } from "react";
import { DeleteIcon } from "../../icons/deleteIcon";

export const ModalCart = () => {
  const isOpenCart = useSelector(openCartItems);
  const cart = useSelector(getCartItems);
  const cartId = useSelector(getCartId)
  const modeCart = useSelector(getMode);
  const dispatch = useDispatch();
  const hadleDeleteItem = (item) => {
    if (modeCart === "guest") {
      dispatch(removeItemFromCartGuest(item));
    } else {
      dispatch(removeItemFromCartAuth(item));
    }
  };

  const handleIncrementQuantity = (item) => {
    if (modeCart === "guest") {
      dispatch(incrementQuantityGuest(item));
    } else {
      dispatch(updateCartItemQtyAuth(item, 1));
    }
  };
  const handleDecrementQuantity = (item) => {
    if (modeCart === "guest") {
      dispatch(decrementQuantityGuest(item));
    } else {
      dispatch(updateCartItemQtyAuth(item, 1));
    }
  };
  const handleClearCart = () => {
    if (modeCart === "guest") {
      dispatch(clearCartGuest());
    } else {
      dispatch(clearCartAuth(cartId));
    }
  };
  const handleClouse = () => dispatch(toggleCart(!isOpenCart));

  useEffect(() => {
    if (isOpenCart && cart.length === 0) {
      dispatch(toggleCart(!isOpenCart));
    }
  }, [cart, isOpenCart, dispatch]);

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
              <ItemImage src={item.image_url} />
              <ItemInfo>
                <ItemName
                  to={`/menu/allProducts/${item.id}`}
                  onClick={handleClouse}
                >
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
        </CartList>
        <WrapPrice>
          <TitlePrice>
            Загальна сума:{" "}
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}{" "}
            грн
          </TitlePrice>
          <ClearButton type="button" onClick={handleClearCart}>
            Очистити корзину
          </ClearButton>
        </WrapPrice>
        <CheckoutButton to={`/order`} onClick={handleClouse}>
          Оформити замовлення
        </CheckoutButton>
        <ContinueButton type="button" onClick={handleClouse}>
          Повернутись до покупок
        </ContinueButton>
      </CartModal>
    </CartOverlay>
  );
};

import { useSelector } from "react-redux";
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
} from "./ModalCart.styled";
import {
  getCartItems,
  getCartSumItems,
  getMode,
  openCartItems,
} from "../../redux/cart/selectors";
import { useEffect } from "react";
import { DeleteIcon } from "../../icons/deleteIcon";
import { useCartItemActions } from "../../hooks/useCartItemActions";
import { useCartActions } from "../../hooks/useCartActions";
import { getIsLoading } from "../../redux/products/selectors";
import { Loader } from "../Loader/Loader";

export const ModalCart = () => {
  const isOpenCart = useSelector(openCartItems);
  const cart = useSelector(getCartItems);
  const cartSumItems = useSelector(getCartSumItems);
  const loading = useSelector(getIsLoading);
  const modeCart = useSelector(getMode);
  const {
    hadleDeleteItem,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleClearCart,
  } = useCartItemActions();
  const { toggleCartModal } = useCartActions();

  useEffect(() => {
    if (isOpenCart && cart.length === 0) {
      toggleCartModal();
    }
  }, [toggleCartModal, isOpenCart, cart]);

  return (
    <CartOverlay open={isOpenCart} onClick={toggleCartModal}>
      <CartModal open={isOpenCart} onClick={(e) => e.stopPropagation()}>
        <CartHeader>
          <CartTitle>Ваше замовлення</CartTitle>
          <CloseBtn onClick={toggleCartModal}>X</CloseBtn>
        </CartHeader>
        {loading ? (
          <Loader text={null} />
        ) : (
          <CartList>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image_url} />
                <ItemInfo>
                  <ItemName
                    to={
                      item.price === 0
                        ? undefined
                        : `/menu/allProducts/${
                            modeCart === "guest" ? item.id : item.product_id
                          }`
                    }
                    onClick={toggleCartModal}
                  >
                    {item.title}
                  </ItemName>
                  <ItemPrice>
                    {item.price || "Потрібно уточнювати"} грн
                  </ItemPrice>
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
        )}

        <WrapPrice>
          <TitlePrice>Загальна сума: {cartSumItems} грн</TitlePrice>
          <ClearButton type="button" onClick={handleClearCart}>
            Очистити корзину
          </ClearButton>
        </WrapPrice>
        <CheckoutButton to={`/order`} onClick={toggleCartModal}>
          Оформити замовлення
        </CheckoutButton>
        <ContinueButton type="button" onClick={toggleCartModal}>
          Повернутись до покупок
        </ContinueButton>
      </CartModal>
    </CartOverlay>
  );
};

import { useSelector } from "react-redux";
import { DeleteIcon } from "../../icons/deleteIcon";
import {
  CartItem,
  ListOrder,
  SummaryBox,
  SummaryText,
  TitleListOrder,
  DeleteItemsBtn,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  QuantityBtn,
  QuantityControl,
} from "./OrderSummary.styled";
import { getCartItems, getCartSumItems } from "../../redux/cart/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartItemActions } from "../../hooks/useCartItemActions";

export const OrderSummary = () => {
  const cart = useSelector(getCartItems);
  const cartSumItems = useSelector(getCartSumItems)
  const navigate = useNavigate();
  const { hadleDeleteItem, handleIncrementQuantity, handleDecrementQuantity } =
    useCartItemActions();
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/menu/allProducts", { replace: true });
    }
  }, [cart, navigate]);
  return (
    <SummaryBox>
      <TitleListOrder>Ваше замовлення</TitleListOrder>
      <ListOrder>
        {cart.map((item) => (
          <CartItem key={item.id}>
            <ItemImage src={item.image_url} />
            <ItemInfo>
              <ItemName to={item.price === 0 ? undefined : `/menu/allProducts/${item.id}`}>
                {item.title}
              </ItemName>
              <ItemPrice>{item.price || "Потрібно уточнювати"} грн</ItemPrice>
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
        Всього:{" "}
        {cartSumItems}{" "}
        грн
      </SummaryText>
    </SummaryBox>
  );
};

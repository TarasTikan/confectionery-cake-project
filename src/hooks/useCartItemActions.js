import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  deleteCart,
  incrementQuantity,
} from "../redux/cart/cartSlice";
import {
  clearCartAuth,
  removeItemFromCartAuth,
  updateCartItemQtyAuth,
} from "../redux/cart/operations";
import { getCartId, getMode } from "../redux/cart/selectors";

export const useCartItemActions = () => {
  const dispatch = useDispatch();
  const modeCart = useSelector(getMode);
  const cartId = useSelector(getCartId);
  const hadleDeleteItem = (item) => {
    if (modeCart === "guest") {
      dispatch(deleteCart(item));
    } else {
      dispatch(removeItemFromCartAuth(item));
    }
  };

  const handleIncrementQuantity = (item) => {
    if (modeCart === "guest") {
      dispatch(incrementQuantity(item));
    } else {
      dispatch(
        updateCartItemQtyAuth({
          itemId: item.id,
          quantity: item.quantity,
          incrementOrDecrement: true,
        })
      );
    }
  };
  const handleDecrementQuantity = (item) => {
    if (modeCart === "guest") {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(
        updateCartItemQtyAuth({
          itemId: item.id,
          quantity: item.quantity,
          incrementOrDecrement: false,
        })
      );
    }
  };

  const handleClearCart = () => {
    if (modeCart === "guest") {
      dispatch(clearCart());
    } else {
      dispatch(clearCartAuth(cartId));
    }
  };
  return {
    hadleDeleteItem,
    handleIncrementQuantity,
    handleDecrementQuantity,
    handleClearCart,
  };
};

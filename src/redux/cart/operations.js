import { createAsyncThunk } from "@reduxjs/toolkit";
import { superbase } from "../../lib/supabaseClient";

export const initModeCart = createAsyncThunk(
  "cart/initModeCart",
  async (_, thunkAPI) => {
    try {
      const { data: authData, error: authError } =
        await superbase.auth.getUser();
      if (authError) throw new Error("Failed to get user");
      const userId = authData?.user?.id;
      return userId ? "auth" : "guest";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrCreateCart = createAsyncThunk(
  "cart/getOrCreateCart",
  async (_, thunkAPI) => {
    try {
      const { data: authData, error: authError } =
        await superbase.auth.getUser();
      if (authError) throw new Error("User not found");
      const userId = authData?.user?.id;
      if (!userId) throw new Error("No authenticated user");

      const { data: cartData, error: cartError } = await superbase
        .from("carts")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();
      if (cartError) throw new Error("Cart not found");
      if (cartData) return cartData;

      const { data: newCartData, error: newCartError } = await superbase
        .from("carts")
        .insert({ user_id: userId })
        .select()
        .single();
      if (newCartError) throw new Error("Failed to create cart");
      return newCartData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (cartId, thunkAPI) => {
    try {
      const { data: cartItemsData, error: cartItemsError } = await superbase
        .from("cart_items")
        .select("*")
        .eq("cart_id", cartId);
      if (cartItemsError) throw new Error("Failed to fetch cart items");
      return cartItemsData ?? [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItemToCartAuth = createAsyncThunk(
  "cart/addItemToCartAuth",
  async ({ cartId, product }, thunkAPI) => {
    try {
      
      if (!cartId) throw new Error("Cart ID is required");
      
      if (!product || !product.id) throw new Error("Product is required");
      
      const { data: productData, error: productError } = await superbase
        .from("cart_items")
        .select("*")
        .eq("cart_id", cartId)
        .eq("product_id", product.id)
        .maybeSingle();
      if (productError) throw new Error("Failed to fetch product in cart");

      if (productData) {
        const { data: updatedProductData, error: updateError } = await superbase
          .from("cart_items")
          .update({ quantity: productData.quantity + 1 })
          .eq("id", productData.id)
          .select()
          .single();
        if (updateError) throw new Error("Failed to update product quantity");
        return updatedProductData;
      }

      const payload = {
        cart_id: cartId,
        product_id: String(product.id),
        title: product.title ?? "",
        image_url: product.image_url ?? "",
        price: product.price ?? 0,
        quantity: 1,
      };

      const { data: newProductData, error: newProductError } = await superbase
        .from("cart_items")
        .insert(payload)
        .select(
          "id, created_at, cart_id, product_id, title, image_url, price, quantity"
        )
        .single();
      if (newProductError) throw new Error("Failed to add product to cart");
      return newProductData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeItemFromCartGuest = createAsyncThunk(
  "cart/removeItemFromCartGuest",
  async (productId, thunkAPI) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const deleteInCartItems = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(deleteInCartItems));
    return deleteInCartItems;
  }
);

export const removeItemFromCartAuth = createAsyncThunk(
  "cart/removeItemFromCartAuth",
  async (productId, thunkAPI) => {
    try {
      if (!productId) throw new Error("itemId is required");

      const { error } = await superbase
        .from("cart_items")
        .delete()
        .eq("id", productId);
      if (error) throw error;

      return { productId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCartItemQtyAuth = createAsyncThunk(
  "cart/updateCartItemQty",
  async ({ itemId, quantity, incrementOrDecrement }, thunkAPI) => {
    if (!itemId) throw new Error("itemId is required");
    const { data: productData, error: productError } = await superbase
      .from("cart_items")
      .update({ quantity: incrementOrDecrement ? quantity + 1 : quantity + (-1)})
      .eq("id", itemId)
      .select(
        "id, created_at, cart_id, product_id, title, image_url, price, quantity"
      )
      .single();

    if (productError) throw productError;
    return productData;
  }
);


export const clearCartAuth = createAsyncThunk(
  "cart/clearCart",
  async (cartId, thunkAPI) => {
    try {
      if (!cartId) throw new Error("cartId is required");

      const { error } = await superbase
        .from("cart_items")
        .delete()
        .eq("cart_id", cartId);
      if (error) throw error;

      return [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const mergeLocalStorageInAuthCart = createAsyncThunk(
  "cart/mergeLocalStorageInAuthCart",
  async (cartId, thunkAPI) => {
    try {
      if (!cartId) throw new Error("cartId is required");

      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (!Array.isArray(localCart) || localCart.length === 0) return [];

      const payload = localCart.map((p) => ({
        cart_id: cartId,
        product_id: String(p.id),          // ВАЖЛИВО
        title: p.title ?? "",
        image_url: p.image_url ?? "",
        price: p.price ?? 0,
        quantity: Number(p.quantity ?? 1),
      }));

      const { data, error } = await superbase
        .from("cart_items")
        .insert(payload)
        .select("id, created_at, cart_id, product_id, title, image_url, price, quantity");

      if (error) throw error;

      localStorage.removeItem("cart"); // щоб не зливало повторно
      return data ?? [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

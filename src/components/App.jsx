import { Routes, Route } from "react-router-dom";
import { SideBar } from "./header/header.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { MenuPage } from "../pages/MenuPage/MenuPage.jsx";
import { AboutPage } from "../pages/AboutPage/AboutPage.jsx";
import { ProductMenuPage } from "../pages/ProductMenuPage/ProductMenuPage.jsx";
import { ProductPage } from "../pages/ProductPage/ProductPage.jsx";
import { OrderPage } from "../pages/OrderPage/OrderPage.jsx";
import { ScrollToTop } from "./ScrollToTop/ScrollToTop.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initAuth } from "../redux/auth/operations.js";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage.jsx";
import { LoginPage } from "../pages/LoginPage/LoginPage.jsx";
import {
  fetchPopularProducts,
  fetchProducts,
} from "../redux/products/operations.js";
import { fetchTaste } from "../redux/tastes/operations.js";
import {
  fetchCartItems,
  getOrCreateCart,
  initModeCart,
} from "../redux/cart/operations.js";
import { getCartId } from "../redux/cart/selectors.js";
import { RestrictedRoute } from "./RestrictedRoute.js";

function App() {
  const dispatch = useDispatch();
  const cartId = useSelector(getCartId);
  useEffect(() => {
    dispatch(initAuth());
    dispatch(fetchProducts());
    dispatch(fetchPopularProducts());
    dispatch(fetchTaste());
    dispatch(initModeCart());
    dispatch(getOrCreateCart());
    dispatch(fetchCartItems(cartId));
  }, [dispatch, cartId]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="menu/:category" element={<ProductMenuPage />} />
          <Route path="menu/:category/:id" element={<ProductPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/"
              />
            }
          />
            <Route
            path="/login"
            element={
              <RestrictedRoute
                component={LoginPage}
                redirectTo="/"
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

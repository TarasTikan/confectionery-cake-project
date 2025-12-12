import { Routes, Route } from "react-router-dom";
import { SideBar } from "./header/header.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { MenuPage } from "../pages/MenuPage/MenuPage.jsx";
import { AboutPage } from "../pages/AboutPage/AboutPage.jsx";
import { ProductMenuPage } from "../pages/ProductMenuPage/ProductMenuPage.jsx";
import { ProductPage } from "../pages/ProductPage/ProductPage.jsx";
import { OrderPage } from "../pages/OrderPage/OrderPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:category" element={<ProductMenuPage />} />
        <Route path="menu/:category/:id" element={<ProductPage />} />
        <Route path="order" element={<OrderPage/>}/>
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;

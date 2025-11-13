import { Routes, Route } from "react-router-dom";
import { SideBar } from "./header/header.jsx";
import { HomePage } from "../pages/HomePage/HomePage.jsx";
import { MenuPage } from "../pages/MenuPage/MenuPage.jsx";
import { AboutPage } from "../pages/AboutPage/AboutPage.jsx";
import { ProductMenuPage } from "../pages/ProductMenuPage/ProductMenuPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />}>
          <Route path="products" element={<ProductMenuPage />} />
        </Route>
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;

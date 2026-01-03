import { useDispatch, useSelector } from "react-redux";
import { CategoryFilterBar, CategoryFilterItem, CategoryFilterLink } from "./CategoryTabs.styled"
import { categoryProducts } from "../../redux/filter/filtersSlice";
import { productsCategory } from "../../redux/filter/constans";
import { getCategory } from "../../redux/filter/selectors";

export const CategoryTabs = () => {
    const dispatch = useDispatch()
     const category = useSelector(getCategory);
     const handleCategoryCakes = (type) => dispatch(categoryProducts(type));
    return (    <CategoryFilterBar>
                <CategoryFilterItem
                  active={category === "allProducts" ? "true" : "false"}
                >
                  <CategoryFilterLink
                    to="/menu/allProducts"
                    onClick={() =>
                      handleCategoryCakes(productsCategory.allProducts)
                    }
                  >
                    Усі
                  </CategoryFilterLink>
                </CategoryFilterItem>
                <CategoryFilterItem
                  active={category === "cakes" ? "true" : "false"}
                >
                  <CategoryFilterLink
                    to="/menu/cakes"
                    onClick={() => handleCategoryCakes(productsCategory.cakes)}
                  >
                    Торти
                  </CategoryFilterLink>
                </CategoryFilterItem>
                <CategoryFilterItem
                  active={category === "cupcakes" ? "true" : "false"}
                >
                  <CategoryFilterLink
                    to="/menu/cupcakes"
                    onClick={() => handleCategoryCakes(productsCategory.cupcakes)}
                  >
                    Капкейки
                  </CategoryFilterLink>
                </CategoryFilterItem>
                <CategoryFilterItem
                  active={category === "macarons" ? "true" : "false"}
                >
                  <CategoryFilterLink
                    to="/menu/macarons"
                    onClick={() => handleCategoryCakes(productsCategory.macarons)}
                  >
                    Макарони
                  </CategoryFilterLink>
                </CategoryFilterItem>
                <CategoryFilterItem
                  active={category === "tarts" ? "true" : "false"}
                >
                  <CategoryFilterLink
                    to="/menu/tarts"
                    onClick={() => handleCategoryCakes(productsCategory.tarts)}
                  >
                    Тарти
                  </CategoryFilterLink>
                </CategoryFilterItem>
              </CategoryFilterBar>)
}
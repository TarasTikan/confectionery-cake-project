import {
  CategoryContainer,
  CategorySection,
  CategoryTitle,
  FilterButton,
} from "./ProductMenuPage.styled";
import { ModalCart } from "../../components/ModalCart/ModalCart";

import { FooterCake } from "../../components/Footer/Footer";
import { FilterModalMob } from "../../components/FilterModalMob/FilterModalMob";
import { FilterIcon } from "../../icons/filterIcon";
import { CategoryTabs } from "../../components/CategoryTabs/CategoryTabs";
import { ProductAndFilters } from "../../components/ProductAndFilters/ProductAndFilters";
import { useFilterActions } from "../../hooks/useFilterActions";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/products/selectors";
import { Loader } from "../../components/Loader/Loader";

export const ProductMenuPage = () => {
  const { handleToggleFilter } = useFilterActions();
  const loading = useSelector(getIsLoading);
  return (
    <>
      <FilterModalMob />
      <CategorySection>
        <CategoryContainer>
          <CategoryTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Наше меню
          </CategoryTitle>
          <CategoryTabs />
          <FilterButton onClick={handleToggleFilter}>
            <FilterIcon />
            Фільтри
          </FilterButton>
          {loading ? <Loader /> : <ProductAndFilters />}
        </CategoryContainer>
        <ModalCart />
      </CategorySection>
      <FooterCake />
    </>
  );
};

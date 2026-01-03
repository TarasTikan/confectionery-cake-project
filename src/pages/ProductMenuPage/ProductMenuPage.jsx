import {
  CategoryContainer,
  CategorySection,
  CategoryTitle,
  FilterButton,
} from "./ProductMenuPage.styled";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getOpenModalFilter } from "../../redux/filter/selectors";
import { toggleFilter } from "../../redux/filter/filtersSlice";

import { ModalCart } from "../../components/ModalCart/ModalCart";

import { FooterCake } from "../../components/Footer/Footer";
import { FilterModalMob } from "../../components/FilterModalMob/FilterModalMob";
import { FilterIcon } from "../../icons/filterIcon";
import { CategoryTabs } from "../../components/CategoryTabs/CategoryTabs";
import { ProductAndFilters } from "../../components/ProductAndFilters/ProductAndFilters";

export const ProductMenuPage = () => {
  const dispatch = useDispatch();
  const isOpenFilter = useSelector(getOpenModalFilter);

  const handleToggleFilter = () => dispatch(toggleFilter(!isOpenFilter));

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
          <ProductAndFilters />
          <Pagination />
        </CategoryContainer>
        <ModalCart />
      </CategorySection>
      <FooterCake />
    </>
  );
};

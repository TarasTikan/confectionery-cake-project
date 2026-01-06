import { Link } from "react-router-dom";
import {
  MenuSection,
  Container,
  MenuTitle,
  MenuList,
  MenuCard,
  MenuCardImage,
  MenuName,
  MenuBtn,
  WrapInfo,
} from "./Menu.styled";
import { useDispatch } from "react-redux";
import { categoryProducts } from "../../redux/filter/filtersSlice";
import { productsCategory } from "../../redux/filter/constans";

export const Menu = () => {
  const dispatch = useDispatch();
  const handleCategoryCakes = type => dispatch(categoryProducts(type))
  return (
    <MenuSection>
      <Container>
        <MenuTitle
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Меню
        </MenuTitle>
        <MenuList>
          <MenuCard
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -10,
              rotate: -0.6,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <Link to="/menu/cakes" onClick={() => handleCategoryCakes(productsCategory.cakes)}>
              <WrapInfo>
                <MenuName>Торти</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src="https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/pageImages/cake.jpg" alt="торт" />
            </Link>
          </MenuCard>
          <MenuCard
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -10,
              rotate: -0.6,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <Link to="/menu/cupcakes" onClick={() => handleCategoryCakes(productsCategory.cupcakes)}>
              <WrapInfo>
                <MenuName>Капкейки</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src="https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/pageImages/capcake.jpg" alt="Капкейки" />
            </Link>
          </MenuCard>
          <MenuCard
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -10,
              rotate: -0.6,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <Link to="/menu/macarons" onClick={() => handleCategoryCakes(productsCategory.macarons)}>
              <WrapInfo>
                <MenuName>Макарони</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src="https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/pageImages/makaron.jpg" alt="Макарони" />
            </Link>
          </MenuCard>
          <MenuCard
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -10,
              rotate: -0.6,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
          >
            <Link to="/menu/tarts" onClick={() => handleCategoryCakes(productsCategory.tarts)}>
              <WrapInfo>
                <MenuName>Тарти</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src="https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/pageImages/tart.jpg" alt="Тарти" />
            </Link>
          </MenuCard>
        </MenuList>
      </Container>
    </MenuSection>
  );
};

import { Link } from "react-router-dom";
import CakeImg from "../../img/cake.jpg";
import CapCakeImg from "../../img/capcake.jpg";
import MakaronImg from "../../img/makaron.jpg";
import TartImg from "../../img/tart.jpg";
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
} from "./menu.styled";

export const Menu = () => {
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
            <Link to="/menu/cakes">
              <WrapInfo>
                <MenuName>Торти</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src={CakeImg} alt="торт" />
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
            <Link to="/menu/cupcakes">
              <WrapInfo>
                <MenuName>Капкейки</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src={CapCakeImg} alt="Капкейки" />
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
            <Link to="/menu/macarons">
              <WrapInfo>
                <MenuName>Макарони</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src={MakaronImg} alt="Макарони" />
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
            <Link to="/menu/tarts">
              <WrapInfo>
                <MenuName>Тарти</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src={TartImg} alt="Тарти" />
            </Link>
          </MenuCard>
        </MenuList>
      </Container>
    </MenuSection>
  );
};

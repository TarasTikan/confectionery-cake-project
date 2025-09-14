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
        <MenuTitle>Меню</MenuTitle>
        <MenuList>
          <MenuCard>
            <a href="/">
              <WrapInfo>
                <MenuName>Торти</MenuName>
                <MenuBtn>Детальніше</MenuBtn>
              </WrapInfo>
              <MenuCardImage src={CakeImg} alt="торт" />
            </a>
          </MenuCard>
          <MenuCard>
            <a href="/">
            <WrapInfo>
              <MenuName>Капкейки</MenuName>
              <MenuBtn>Детальніше</MenuBtn>
            </WrapInfo>
            <MenuCardImage src={CapCakeImg} alt="Капкейки" />
            </a>
          </MenuCard>
          <MenuCard>
            <a href="/">
            <WrapInfo>
              <MenuName>Макарони</MenuName>
              <MenuBtn>Детальніше</MenuBtn>
            </WrapInfo>
            <MenuCardImage src={MakaronImg} alt="Макарони" />
            </a>
          </MenuCard>
          <MenuCard>
            <a href="/">
            <WrapInfo>
              <MenuName>Тарти</MenuName>
              <MenuBtn>Детальніше</MenuBtn>
            </WrapInfo>
            <MenuCardImage src={TartImg} alt="Тарти" />
            </a>
          </MenuCard>
        </MenuList>
      </Container>
    </MenuSection>
  );
};

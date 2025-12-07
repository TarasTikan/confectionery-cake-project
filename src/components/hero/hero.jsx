import {
  Container,
  HeroTitle,
  HeroSubTitle,
  HeroBtn,
  HeroImage,
  HeroSection,
  HeroWrapInfo,
} from "./hero.styled";
import imgHero from "../../img/heroImage.png";
export const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <HeroWrapInfo>
          <HeroTitle>Найсолодші моменти - тут</HeroTitle>
          <HeroSubTitle>
            Торти, капкейки та десерти ручної роботи з доставкою по місту
          </HeroSubTitle>
          <HeroBtn to="/menu">Переглянути меню</HeroBtn>
        </HeroWrapInfo>
        <HeroImage src={imgHero} alt="тортик" />
      </Container>
    </HeroSection>
  );
};

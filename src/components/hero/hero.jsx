import {
  Container,
  HeroTitle,
  HeroSubTitle,
  HeroBtn,
  HeroImage,
  HeroSection,
  HeroWrapInfo,
} from "./Hero.styled";
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
        <HeroImage src="https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/pageImages/heroImage.png" alt="тортик" />
      </Container>
    </HeroSection>
  );
};

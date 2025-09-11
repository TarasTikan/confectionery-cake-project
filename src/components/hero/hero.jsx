import { Container, HeroTitle, HeroSubTitle, HeroBtn,HeroImage,HeroSection,HeroWrapInfo } from "./hero.styled"
import imgHero from '../../img/heroImage.jpg'
export const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <HeroWrapInfo>
                    <HeroTitle>Найсолодші моменти - тут</HeroTitle>
                    <HeroSubTitle>Торти, капкейки та десерти ручної роботи з доставкою по місту</HeroSubTitle>
                    <HeroBtn>Переглянути меню</HeroBtn>
                </HeroWrapInfo>
                <HeroImage src={imgHero} alt="тортик"/>
            </Container>
        </HeroSection>
    )
}
import { Container, HeroTitle, HeroSubTitle, HeroBtn,HeroImage,HeroSection } from "./hero.styled"
import imgHero from '../../img/heroImage.jpg'
export const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <div>
                    <HeroTitle>Найсолодші моменти - тут</HeroTitle>
                    <HeroSubTitle>Торти, капкейки та десерти ручної роботи з доставкою по місту</HeroSubTitle>
                    <HeroBtn>Переглянути меню</HeroBtn>
                </div>
                <HeroImage src={imgHero} alt="тортик"/>
            </Container>
        </HeroSection>
    )
}
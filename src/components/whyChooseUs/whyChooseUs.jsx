import {WhyChooseUsSection,Container,WhyChooseImg,WrapWhyText,WhyTitle,BenefitText} from "./whyChooseUs.styled"
import womanImg from "../../img/womanPopular.png"
export const WhyChooseUs = () => {
    return (
<WhyChooseUsSection>
    <Container>
        <WhyChooseImg src={womanImg} alt="жінка тримає торт" />
        <WrapWhyText>
            <WhyTitle>Чому нас обирають?</WhyTitle>
            <BenefitText>Торти ручної роботи з найкращих інгредієнтів</BenefitText>
            <BenefitText>Індивідуальний дизайн для кожного замовлення</BenefitText>
            <BenefitText>Швидка доставка по місту <br/>та збереження свіжості</BenefitText>
        </WrapWhyText> 
    </Container>
</WhyChooseUsSection>
    )
}
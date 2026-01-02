import {
  WhyChooseUsSection,
  Container,
  WhyChooseImg,
  WrapWhyText,
  WhyTitle,
  BenefitText,
  WrapText,
} from "./WhyChooseUs.styled";
import womanImg from "../../img/womanPopular.png";
import { CakeIcon } from "../../icons/cakeIcon";
import { HeartIcon } from "../../icons/heartIcon";
import { DeliveryIcon } from "../../icons/deliveryIcon";
export const WhyChooseUs = () => {
  return (
    <WhyChooseUsSection
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container>
        <WhyChooseImg src={womanImg} alt="жінка тримає торт" />
        <WrapWhyText>
          <WhyTitle>Чому нас обирають?</WhyTitle>
          <WrapText></WrapText>
          <WrapText
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.08,
            }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <HeartIcon />
            <BenefitText>
              Торти ручної роботи <br />з найкращих інгредієнтів
            </BenefitText>
          </WrapText>
          <WrapText
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.08,
            }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <CakeIcon />
            <BenefitText>
              Індивідуальний дизайн
              <br /> для кожного замовлення
            </BenefitText>
          </WrapText>
          <WrapText
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.08,
            }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <DeliveryIcon />
            <BenefitText>
              Швидка доставка по місту <br />
              та збереження свіжості
            </BenefitText>{" "}
          </WrapText>
        </WrapWhyText>
      </Container>
    </WhyChooseUsSection>
  );
};

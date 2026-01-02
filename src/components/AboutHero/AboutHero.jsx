import { useSelector } from "react-redux";
import {
  Container,
  HeroSection,
  AboutHeroTitleSecond,
  Title,
  AboutHeroWrapper,
  Description,
  PrimaryBtn,
  StatsLabel,
  StatsList,
  StatsNumber,
  StatsItem,
} from "./AboutHero.styled";
import { getCartItems } from "../../redux/cart/selectors";

export const AboutHero = () => {
  const cart = useSelector(getCartItems);
  return (
    <HeroSection>
      <Container>
        <AboutHeroTitleSecond
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          💜 Ручна робота • Свіжі інгредієнти
        </AboutHeroTitleSecond>
        <AboutHeroWrapper>
          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Про нас
          </Title>
          <Description
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Ми — невеличка кондитерська, що готує торти, капкейки, макарони та
            тарти у <strong>ніжній пастельній естетиці</strong>. Працюємо лише з
            натуральними інгредієнтами й створюємо індивідуальні десерти під
            вашу подію.
          </Description>
            <PrimaryBtn
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            to={cart.length === 0 ? "/menu" : "/order"}>
              Замовити десерт
            </PrimaryBtn>
        </AboutHeroWrapper>
        <StatsList
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <StatsItem>
            <StatsNumber>7+</StatsNumber>
            <StatsLabel>років досвіду</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsNumber>1200+</StatsNumber>
            <StatsLabel>щасливих клієнтів</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsNumber>30+</StatsNumber>
            <StatsLabel>смаків тортів</StatsLabel>
          </StatsItem>
        </StatsList>
      </Container>
    </HeroSection>
  );
};

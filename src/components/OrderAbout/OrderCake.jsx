import {
  OrderSection,
  OrderTitle,
  OrderText,
  ListButtons,
  CallBtn,
  Container,
} from "./OrderCake.styled";

export const OrderCake = () => {
  return (
    <OrderSection
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
        <OrderTitle>Готові зробити ваше свято солодшим?</OrderTitle>
        <OrderText>
          Напишіть нам у зручний месенджер — оберемо смак, розмір і декор за
          кілька хвилин.
        </OrderText>
        <ListButtons>
          <li>
            <CallBtn href="/">+380 (xx) xxx-xx-xx</CallBtn>
          </li>
          <li>
            <CallBtn href="/">Telegram</CallBtn>
          </li>
          <li>
            <CallBtn href="/">Viber</CallBtn>
          </li>
        </ListButtons>
      </Container>
    </OrderSection>
  );
};

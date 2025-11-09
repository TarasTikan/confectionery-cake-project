import { Container, ValueCard, ValuesGrid, ValuesLead, ValuesSection, ValuesTitle, ValueText, ValueTitle } from "./Values.styled";

export const Values = () => {
  return (
    <ValuesSection>
      <Container>
        <ValuesTitle  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>Наші цінності</ValuesTitle>
        <ValuesLead  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>
          Якість, турбота та естетика — три речі, які ви відчуєте з першого
          шматочка.
        </ValuesLead>
        <ValuesGrid  initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>
          <ValueCard>
            <ValueTitle>🥛 Натуральні інгредієнти</ValueTitle>
            <ValueText>
              Вершкове масло, фермерські яйця, сезонні ягоди — без штучних
              ароматизаторів.
            </ValueText>
          </ValueCard>
          <ValueCard>
            <ValueTitle>🎀 Індивідуальний дизайн</ValueTitle>
            <ValueText>
              Підбираємо форму, колір, декор і напис під вашу подію та настрій.
            </ValueText>
          </ValueCard>
          <ValueCard>
            <ValueTitle>🚚 Свіжість і доставка</ValueTitle>
            <ValueText>
              Готуємо під дату, охолоджене пакування та оперативна доставка по
              місту.
            </ValueText>
          </ValueCard>
        </ValuesGrid>
      </Container>
    </ValuesSection>
  );
};

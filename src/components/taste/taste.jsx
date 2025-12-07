import {
  TasteSection,
  Container,
  TasteList,
  TasteImage,
  TasteTitle,
  TasteCard,
  TasteTitleProduct,
  DescriptionContainer,
  TasteTextDescribe,
} from "./taste.styled";
import { fillings } from "../../data/data";



export const Tastes = (e) => {


  return (
    <TasteSection
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
        <TasteTitle>Смаки</TasteTitle>
        <TasteList>
          {fillings.map((item) => (
            <TasteCard key={item.id}>
              <TasteTitleProduct>{item.title}</TasteTitleProduct>
              <TasteImage src={item.image} />
              <DescriptionContainer>
                <TasteTextDescribe>{item.description}</TasteTextDescribe>
              </DescriptionContainer>
   
          </TasteCard>
          ))}
        </TasteList>
      </Container>
    </TasteSection>
  );
};

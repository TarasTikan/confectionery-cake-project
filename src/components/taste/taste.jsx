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
} from "./Taste.styled";
import { useSelector } from "react-redux";
import { getTastes } from "../../redux/tastes/selectors";



export const Tastes = (e) => {
const tastes = useSelector(getTastes);

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
          {tastes.map((item) => (
            <TasteCard key={item.id}>
              <TasteTitleProduct>{item.title}</TasteTitleProduct>
              <TasteImage src={item.image_url} />
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

import {
  DesignSection,
  Container,
  DesignTitle,
  DesignSubTitle,
  DesignTitleCard,
  DesignTextCard,
  DesignList,
  DesignListItem,
} from "./customDesign.styled";
import { FormIcon } from "../../icons/formIcon";
import { DownloadIcon } from "../../icons/downloadIcon";
import { SizeCakeIcon } from "../../icons/sizeCakeIcon";
import { TasteIcon } from "../../icons/tasteIcon";
import { DecorIcon } from "../../icons/decorIcon";
import { PencilIcon } from "../../icons/pencilIcon";
export const CustomDesign = () => {
  return (
    <DesignSection>
      <Container>
        <div>
          <DesignTitle>Кастомний дизайн</DesignTitle>
          <DesignSubTitle>
            Створи торт своєї мрії - обери форму, смак, декор та інші деталі
          </DesignSubTitle>
        </div>
        <DesignList>
          <DesignListItem>
            <DesignTitleCard>Форма</DesignTitleCard>
            <FormIcon />
            <DesignTextCard>
              Круглий, квадратний, прямокутний, серце, багатоярусний
            </DesignTextCard>
          </DesignListItem>
          <DesignListItem>
            <DesignTitleCard>Розмір</DesignTitleCard>
            <SizeCakeIcon />
            <DesignTextCard>
              на 6, 10, 20, 30, 50 персон або більше
            </DesignTextCard>
          </DesignListItem>
          <DesignListItem>
            <DesignTitleCard>Смак</DesignTitleCard>
            <TasteIcon />
            <DesignTextCard>
              шоколадний, ванільний, полуничниий і т.д.
            </DesignTextCard>
          </DesignListItem>
          <DesignListItem>
            <DesignTitleCard>Декор</DesignTitleCard>
            <DecorIcon />
            <DesignTextCard>
              квіти, фігурки, стрічки, топери і т.д.
            </DesignTextCard>
          </DesignListItem>
          <DesignListItem>
            <DesignTitleCard>Напис</DesignTitleCard>
            <PencilIcon />
            <DesignTextCard>ім'я, вітання, побажання і т.д.</DesignTextCard>
          </DesignListItem>
          <DesignListItem>
            <DesignTitleCard>Фото</DesignTitleCard>
            <DownloadIcon />
            <DesignTextCard>
              прикріпи фото, яке хочеш бачити на торті.
            </DesignTextCard>
          </DesignListItem>
        </DesignList>
      </Container>
    </DesignSection>
  );
};

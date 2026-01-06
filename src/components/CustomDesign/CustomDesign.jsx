import {
  DesignSection,
  Container,
  DesignTitle,
  DesignSubTitle,
  DesignTitleCard,
  DesignTextCard,
  DesignList,
  Designbtn,
  DesignListItem,
  CreateCustombtn,
} from "./CustomDesign.styled";
import { FormIcon } from "../../icons/formIcon";
import { DownloadIcon } from "../../icons/downloadIcon";
import { SizeCakeIcon } from "../../icons/sizeCakeIcon";
import { TasteIcon } from "../../icons/tasteIcon";
import { DecorIcon } from "../../icons/decorIcon";
import { PencilIcon } from "../../icons/pencilIcon";
import { useEffect } from "react";
import { CustomDesignModal } from "../CustomDesignModal/CustomDesignModal";
import { useToggleMobMenu } from "../../hooks/useToggleMobMenu";

export const CustomDesign = () => {
  const { toggle, isOpen } = useToggleMobMenu();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <DesignSection>
      <Container>
        <div>
          <DesignTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Кастомний дизайн
          </DesignTitle>
          <DesignSubTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Створи торт своєї мрії - обери форму, смак, декор та інші деталі
          </DesignSubTitle>
        </div>
        <DesignList
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <DesignListItem>
            <Designbtn onClick={toggle}>
              <DesignTitleCard>Форма</DesignTitleCard>
              <FormIcon />
              <DesignTextCard>
                Круглий, квадратний, прямокутний, серце, багатоярусний
              </DesignTextCard>
            </Designbtn>
          </DesignListItem>
          <DesignListItem>
            <Designbtn onClick={toggle}>
              <DesignTitleCard>Розмір</DesignTitleCard>
              <SizeCakeIcon />
              <DesignTextCard>
                на 6, 10, 20, 30, 50 персон або більше
              </DesignTextCard>
            </Designbtn>
          </DesignListItem>
          <DesignListItem>
            <Designbtn onClick={toggle}>
              <DesignTitleCard>Смак</DesignTitleCard>
              <TasteIcon />
              <DesignTextCard>
                шоколадний, ванільний, полуничниий і т.д.
              </DesignTextCard>
            </Designbtn>
          </DesignListItem>
          <DesignListItem>
            <Designbtn onClick={toggle}>
              <DesignTitleCard>Декор</DesignTitleCard>
              <DecorIcon />
              <DesignTextCard>
                квіти, фігурки, стрічки, топери і т.д.
              </DesignTextCard>
            </Designbtn>
          </DesignListItem>
          <DesignListItem>
            <Designbtn onClick={toggle}>
              <DesignTitleCard>Напис</DesignTitleCard>
              <PencilIcon />
              <DesignTextCard>ім'я, вітання, побажання і т.д.</DesignTextCard>
            </Designbtn>
          </DesignListItem>
          <DesignListItem>
            <Designbtn onClick={toggle}>
              <DesignTitleCard>Фото</DesignTitleCard>
              <DownloadIcon />
              <DesignTextCard>
                прикріпи фото, яке хочеш бачити на торті.
              </DesignTextCard>
            </Designbtn>
          </DesignListItem>
        </DesignList>
        <CreateCustombtn onClick={toggle}>
          Створити власний дизайн
        </CreateCustombtn>
      </Container>
      <CustomDesignModal open={isOpen} clouseModal={toggle} />
    </DesignSection>
  );
};

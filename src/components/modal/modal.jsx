import {
  Backdrop,
  ClouseBtn,
  ModalWindow,
  Container,
  Title,
  TitleForm,
  ListForm,
  ItemForm,
  RadioInput,
  RadioLabel,
  FormCakes,
  TasteSelect,
  DesignCakesForm,
  DecorLabel,
  DecorCheckbox,
  CommentCakes,
  FileUploadForm,
  FileInput,
  CancelButton,
  ConfirmButton,
  ButtonsWrapper,
  FileLabel
} from "./modal.styled";

import { fillings } from "../../data/data.js";

export const Modal = ({ clouseModal, open }) => {
  const handleClouse = () => {
    clouseModal();
  };
  return (
    <Backdrop open={open}>
      <ModalWindow open={open}>
        <ClouseBtn onClick={handleClouse}>X</ClouseBtn>
        <Container>
          <Title>Створи свій торт</Title>
          <ListForm>
            <ItemForm>
              <TitleForm>Форма</TitleForm>
              <FormCakes>
                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-round"
                />
                <RadioLabel for="form-cakes-round">Круглий</RadioLabel>

                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-square"
                />
                <RadioLabel for="form-cakes-square">Квадратний</RadioLabel>

                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-heart"
                />
                <RadioLabel for="form-cakes-heart">Серце</RadioLabel>

                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-rectangular"
                />
                <RadioLabel for="form-cakes-rectangular">
                  Прямокутний
                </RadioLabel>
              </FormCakes>
            </ItemForm>
            <ItemForm>
              <TitleForm>Розмір форми та вага</TitleForm>
              <FormCakes>
                <RadioLabel for="size-cakes-one">16 см та 1,5 кг</RadioLabel>
                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-one"
                />

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-two"
                />
                <RadioLabel for="size-cakes-two">18 см та 2 кг</RadioLabel>

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-three"
                />
                <RadioLabel for="size-cakes-three">
                  20 см та 2,5-3 кг
                </RadioLabel>

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-four"
                />
                <RadioLabel for="size-cakes-four">22 см та 4-4,5 кг</RadioLabel>

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-five"
                />
                <RadioLabel for="size-cakes-five">24 см та 5-5,5 кг</RadioLabel>
              </FormCakes>
            </ItemForm>
            <ItemForm>
              <TitleForm>Смак</TitleForm>
              <form>
                <TasteSelect id="size" name="size">
                  {fillings.map(({ id, title }) => (
                    <option value="title" id={id}>
                      {title}
                    </option>
                  ))}
                </TasteSelect>
              </form>
            </ItemForm>
            <ItemForm>
              <TitleForm>Декор</TitleForm>
              <DesignCakesForm>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="decor" value="berries" />
                  Ягоди
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="design" />
                  Квіти
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="design" />
                  Шоколадний дрип
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="design" />
                  Макарони
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="design" />
                  Меренги
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="design" />
                  Дзеркальна глазур
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox type="checkbox" name="design" />
                  Мінімалізм
                </DecorLabel>
              </DesignCakesForm>
            </ItemForm>
            <ItemForm>
              <TitleForm>Коментар чи напис до замовлення</TitleForm>
              <form>
                <CommentCakes placeholder="ім'я, дата або привітання" />
              </form>
            </ItemForm>
            <ItemForm>
              <TitleForm>Фото</TitleForm>
              <FileUploadForm>
                <FileLabel for="img-cakes">
                   Обери фото
                </FileLabel>
                <FileInput id="img-cakes" type="file" />
              </FileUploadForm>
            </ItemForm>
          </ListForm>
          <ButtonsWrapper>
            <ConfirmButton>Додати до кошика</ConfirmButton>
            <CancelButton onClick={handleClouse}>Скасувати</CancelButton>
          </ButtonsWrapper>
        </Container>
      </ModalWindow>
    </Backdrop>
  );
};

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
  FileLabel,
  TextModalCustom,
  TitleInput,
} from "./CustomDesignModal.styled.jsx";

import { getTastes } from "../../redux/tastes/selectors.js";
import { useSelector } from "react-redux";
import {
  getComment,
  getDesignElements,
  getForm,
  getSize,
  getTaste,
  getTitle,
} from "../../redux/customProduct/selectors.js";
import { useAddCustomProductInCart, useCustomProduct } from "../../hooks/useCustomProduct.js";

export const CustomDesignModal = ({ clouseModal, open }) => {
  const form = useSelector(getForm);
  const size = useSelector(getSize);
  const taste = useSelector(getTaste);
  const design = useSelector(getDesignElements);
  const comment = useSelector(getComment);
  const tastes = useSelector(getTastes);
  const title = useSelector(getTitle);
  const handleClouse = () => {
    clouseModal();
  };

  const {
    handleFormChange,
    handleSizeChange,
    handleTasteChange,
    handleDesignChange,
    handleCommentChange,
    handleTitleChange
  } = useCustomProduct();
  const addCustomProductInCart = useAddCustomProductInCart()
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
                  value="Круглий"
                  checked={form === "Круглий"}
                  onChange={handleFormChange}
                />
                <RadioLabel htmlFor="form-cakes-round">Круглий</RadioLabel>

                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-square"
                  value="Квадратний"
                  checked={form === "Квадратний"}
                  onChange={handleFormChange}
                />
                <RadioLabel htmlFor="form-cakes-square">Квадратний</RadioLabel>

                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-heart"
                  value="Серце"
                  checked={form === "Серце"}
                  onChange={handleFormChange}
                />
                <RadioLabel htmlFor="form-cakes-heart">Серце</RadioLabel>

                <RadioInput
                  type="radio"
                  name="form-cakes"
                  id="form-cakes-rectangular"
                  value="Прямокутний"
                  checked={form === "Прямокутний"}
                  onChange={handleFormChange}
                />
                <RadioLabel htmlFor="form-cakes-rectangular">
                  Прямокутний
                </RadioLabel>
              </FormCakes>
            </ItemForm>
            <ItemForm>
              <TitleForm>Розмір форми та вага</TitleForm>
              <FormCakes>
                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-one"
                  value="16 см та 1,5 кг"
                  checked={size === "16 см та 1,5 кг"}
                  onChange={handleSizeChange}
                />
                <RadioLabel htmlFor="size-cakes-one">16 см та 1,5 кг</RadioLabel>
                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-two"
                  value="18 см та 2 кг"
                  checked={size === "18 см та 2 кг"}
                  onChange={handleSizeChange}
                />
                <RadioLabel htmlFor="size-cakes-two">18 см та 2 кг</RadioLabel>

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-three"
                  value="20 см та 2,5-3 кг"
                  checked={size === "20 см та 2,5-3 кг"}
                  onChange={handleSizeChange}
                />
                <RadioLabel htmlFor="size-cakes-three">
                  20 см та 2,5-3 кг
                </RadioLabel>

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-four"
                  value="22 см та 4-4,5 кг"
                  checked={size === "22 см та 4-4,5 кг"}
                  onChange={handleSizeChange}
                />
                <RadioLabel htmlFor="size-cakes-four">
                  22 см та 4-4,5 кг
                </RadioLabel>

                <RadioInput
                  type="radio"
                  name="size-cakes"
                  id="size-cakes-five"
                  value="24 см та 5-5,5 кг"
                  checked={size === "24 см та 5-5,5 кг"}
                  onChange={handleSizeChange}
                />
                <RadioLabel htmlFor="size-cakes-five">
                  24 см та 5-5,5 кг
                </RadioLabel>
              </FormCakes>
            </ItemForm>
            <ItemForm>
              <TitleForm>Смак</TitleForm>
              <form>
                <TasteSelect
                  id="taste"
                  name="taste"
                  value={taste}
                  onChange={handleTasteChange}
                >
                  {tastes.map(({ id, title }) => (
                    <option value={title} key={id}>
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
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="berries"
                    checked={design.includes("berries")}
                    onChange={handleDesignChange}
                  />
                  Ягоди
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="Flowers"
                    checked={design.includes("Flowers")}
                    onChange={handleDesignChange}
                  />
                  Квіти
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="Chocolate drip"
                    checked={design.includes("Chocolate drip")}
                    onChange={handleDesignChange}
                  />
                  Шоколадний дрип
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="macarons"
                    checked={design.includes("macarons")}
                    onChange={handleDesignChange}
                  />
                  Макарони
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="Meringues"
                    checked={design.includes("Meringues")}
                    onChange={handleDesignChange}
                  />
                  Меренги
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="Mirror glaze"
                    checked={design.includes("Mirror glaze")}
                    onChange={handleDesignChange}
                  />
                  Дзеркальна глазур
                </DecorLabel>
                <DecorLabel>
                  <DecorCheckbox
                    type="checkbox"
                    name="design"
                    value="Minimalizm"
                    checked={design.includes("Minimalizm")}
                    onChange={handleDesignChange}
                  />
                  Мінімалізм
                </DecorLabel>
              </DesignCakesForm>
            </ItemForm>
            <ItemForm>
              <TitleForm>Коментар чи напис до замовлення</TitleForm>
              <form>
                <CommentCakes
                  placeholder="ім'я, дата або привітання"
                  value={comment}
                  name="comment"
                  onChange={handleCommentChange}
                />
                <TitleInput placeholder="Вкажіть назву свого кастомного торта" name="title" onChange={handleTitleChange} value={title} maxLength={30}/>
              </form>
            </ItemForm>
            <ItemForm>
              <TitleForm>Фото</TitleForm>
              <FileUploadForm>
                <FileLabel htmlFor="img-cakes">Обери фото</FileLabel>
                <FileInput
                  id="img-cakes"
                  type="file"
                />
              </FileUploadForm>
            </ItemForm>
          </ListForm>
          <TextModalCustom>
            Після заповнення форми, ми з вами додатково зв'яжемось, для
            уточнення дизайну вашого торта!
          </TextModalCustom>
          <ButtonsWrapper>
            <ConfirmButton onClick={e => addCustomProductInCart()}>Додати до кошика</ConfirmButton>
            <CancelButton onClick={handleClouse}>Скасувати</CancelButton>
          </ButtonsWrapper>
        </Container>
      </ModalWindow>
    </Backdrop>
  );
};

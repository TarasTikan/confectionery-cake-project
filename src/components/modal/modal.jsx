import {
  Backdrop,
  ClouseBtn,
  ModalWindow,
  Container,
  Title,
  LabelForm,
  ListForm,
  ItemForm
} from "./modal.styled";

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
              <form>
                <LabelForm for="form-cakes">Форма</LabelForm>
                <input id="form-cakes" />
              </form>
            </ItemForm>
            <ItemForm>
              <form>
                <LabelForm for="size-cakes">Розмір</LabelForm>
                <input id="size-cakes" />
              </form>
            </ItemForm>
            <ItemForm>
              <form>
               <LabelForm for="taste-cakes">Смак</LabelForm>
                <input id="taste-cakes" />
              </form>
            </ItemForm>
            <ItemForm>
              <form>
                 <LabelForm for="design-cakes">Декор</LabelForm>
                <input id="design-cakes" />
              </form>
            </ItemForm>
            <ItemForm>
              <form>
                 <LabelForm for="text-cakes">Напис</LabelForm>
                <input id="text-cakes" placeholder="ім'я, дата або привітання"/>
              </form>
            </ItemForm>
            <ItemForm>
              <form>
                 <LabelForm for="img-cakes">Фото</LabelForm>
                <input id="img-cakes" />
              </form>
            </ItemForm>
          </ListForm>
        </Container>
      </ModalWindow>
    </Backdrop>
  );
};

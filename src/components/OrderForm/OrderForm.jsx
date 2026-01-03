import { useSelector } from "react-redux";
import { FormTitle } from "../../pages/OrderPage/OrderPage.styled";
import { selectAuthUser } from "../../redux/auth/selectors";
import { Form, Input, SubmitButton } from "./OrderForm.styled";

export const OrderForm = () => {
  const isAuth = useSelector(selectAuthUser);
  return (
    <Form>
      <FormTitle>Інформація про покупця</FormTitle>
      <label>
        Ім'я та прізвище отримувача
        <Input type="text" />
      </label>
      <label>
        Телефон
        <Input type="number" />
      </label>
      <label>
        Електронна пошта
        <Input type="email" />
      </label>
      <label>
        Місто
        <Input type="text" />
      </label>
      <label>
        Адреса отримувача
        <Input type="text" />
      </label>
      {isAuth ? (
        <SubmitButton>Оформити замовлення</SubmitButton>
      ) : (
        <SubmitButton>Оформити замовлення як гість</SubmitButton>
      )}
    </Form>
  );
};

import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import {
  AuthForm,
  AuthTitle,
  AuthInput,
  AuthButton,
  AuthSubtitle,
  AuthFooterText,
} from "./Register.styled";
import { useNavigate } from "react-router-dom";
import { fetchCartItems, getOrCreateCart } from "../../redux/cart/operations";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const name = form.name.value;
    if (confirmPassword !== password) return alert("Не співпадають введені паролі")
    try {
      await dispatch(registerUser({ email, password, name })).unwrap();

      const cart = await dispatch(getOrCreateCart()).unwrap();
      await dispatch(fetchCartItems(cart.id)).unwrap();

      form.reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <AuthForm onSubmit={handleRegister}>
      <AuthTitle>Реєстрація</AuthTitle>
      <AuthSubtitle>
        Будь ласка, створіть обліковий запис, щоб отримати доступ до всіх
        функцій нашої кондитерської
      </AuthSubtitle>
      <AuthInput type="text" name="name" required placeholder="Повне ім'я" />
      <AuthInput
        type="email"
        name="email"
        required
        placeholder="Електронна пошта"
      />
      <AuthInput
        type="password"
        name="password"
        required
        placeholder="Пароль"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        title="Повинно містити щонайменше 8 символів, включно з великими та малими літерами, цифрою та спеціальним символом."
      />
      <AuthInput
        type="password"
        name="confirmPassword"
        required
        placeholder="Підтвердження паролю"
      />
      <AuthButton type="submit">Зареєструватися</AuthButton>
      <AuthFooterText>
        Вже маєте аккаунт? <a href="/">Увійдіть</a>
      </AuthFooterText>
    </AuthForm>
  );
};

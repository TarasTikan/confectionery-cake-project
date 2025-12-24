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

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    dispatch(registerUser({ email, password, name }));
    form.reset();
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

import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import {
  AuthButton,
  AuthFooterText,
  AuthForm,
  AuthInput,
  AuthSubtitle,
  AuthTitle,
} from "./LoginForm.styled";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(loginUser({ email: email, password }));
    form.reset();
    form.reset();
    navigate("/");
  };

  return (
    <AuthForm onSubmit={handleLogin}>
      <AuthTitle>Авторизація</AuthTitle>
      <AuthSubtitle>З поверненням!</AuthSubtitle>
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

      <AuthButton type="submit">Авторизаватися</AuthButton>
      <AuthFooterText>
        Ще не маєте аккаунт? <a href="/">Зареєструватися</a>
      </AuthFooterText>
    </AuthForm>
  );
};

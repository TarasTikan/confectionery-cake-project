import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import {
  AuthButton,
  AuthFooterText,
  AuthForm,
  AuthInput,
  AuthSubtitle,
  AuthTitle,
  ErrorText,
} from "./LoginForm.styled";
import { useNavigate } from "react-router-dom";
import { fetchCartItems, getOrCreateCart } from "../../redux/cart/operations";
import { selectAuthError } from "../../redux/auth/selectors";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorLogin = useSelector(selectAuthError);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await dispatch(loginUser({ email, password })).unwrap();

      const cart = await dispatch(getOrCreateCart()).unwrap();
      await dispatch(fetchCartItems(cart.id)).unwrap();

      form.reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
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
      {errorLogin ? <ErrorText>Не вірна пошта чи пароль</ErrorText> : undefined}
      <AuthButton type="submit">Авторизаватися</AuthButton>
      <AuthFooterText>
        Ще не маєте аккаунт? <a href="/">Зареєструватися</a>
      </AuthFooterText>
    </AuthForm>
  );
};

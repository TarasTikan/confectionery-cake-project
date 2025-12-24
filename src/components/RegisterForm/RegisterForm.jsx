import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { AuthForm,AuthTitle,Field,AuthInput, AuthButton } from "./Register.styled";


export const RegisterForm = () => {

 const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(registerUser({ email: email, password }));
  }

  return (
    <AuthForm onSubmit={handleRegister}>
        <AuthTitle>Register</AuthTitle>
        <Field>
            Email:
            <AuthInput type="email" name="email" required />
            </Field>
            <Field>
            Password:
            <AuthInput type="password" name="password" required />
            </Field>
            <AuthButton type="submit">Register</AuthButton>
    </AuthForm>
  )
}
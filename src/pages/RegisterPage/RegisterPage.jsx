import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { AuthPage } from "./RegisterPage.styled";
export const RegisterPage = () => {
  return (
    <main>
      <AuthPage>
        <RegisterForm />
      </AuthPage>
    </main>
  );
};

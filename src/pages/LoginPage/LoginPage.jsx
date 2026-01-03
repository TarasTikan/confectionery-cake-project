import { LoginForm } from "../../components/LoginForm/LoginForm";
import { AuthPage } from "./LoginPage.styled";

export const LoginPage = () => {
  return (
    <main>
      <AuthPage>
        <LoginForm />
      </AuthPage>
    </main>
  );
};

import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { AuthPage } from "./RegisterPage.styled"
export const RegisterPage = () => {
    
    return (
        <main>
            <AuthPage>
                <img src="../../img/authBg.jpg" alt="" />
                <h1>Register Page</h1>
                <RegisterForm/>
            </AuthPage>
        </main>
    )
}
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";


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
    <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <label>
            Email:
            <input type="email" name="email" required />
            </label>
            <label>
            Password:
            <input type="password" name="password" required />
            </label>
            <button type="submit">Register</button>
    </form>
  )
}
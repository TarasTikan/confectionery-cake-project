import { useSelector } from "react-redux"
import { selectAuthUser } from "../redux/auth/selectors"

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectAuthUser)
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />
}
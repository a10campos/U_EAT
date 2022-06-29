import {useSelector } from "react-redux";
import {Navigate,Outlet} from "react-router-dom";
//import jwtDecode from "jwt-decode";

export default function PrivateRoute ({
    children,
    redirectPath = "/login",
}) {
    const userState = useSelector((state) => state.user);
    if (!userState.userIsLoggedIn) {
        return <Navigate to={redirectPath} replace/>
    }
    try {
        //const decryptedToken = jwtDecode(userState.user.token);
    } catch (error){
        return <Navigate to={redirectPath} replace/>
    }
    return children || <Outlet/>
}
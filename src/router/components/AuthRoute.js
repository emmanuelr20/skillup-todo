import { Route, Redirect } from "react-router-dom";
import { useAppContext } from '../../contexts/Prodiver/AppContextProdiver';

export default function AuthRoute(props) {
    const { user, authLoading } = useAppContext();
    console.log(user)
    const isAuthenticated = user;


    return authLoading ? "Loading..." : (
        isAuthenticated ?
            <Route {...props} /> :
            <Route {...props}>
                <Redirect to="/auth/login" />
            </Route>
    )
}

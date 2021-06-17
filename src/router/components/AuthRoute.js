import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default function AuthRoute(props) {

    const isAuthenticated = true;

    return (
        isAuthenticated ?
            <Route {...props} /> :
            <Route {...props}>
                <Redirect to="/login" />
            </Route>
    )
}

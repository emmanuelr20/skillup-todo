import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

export default function GuestRoutes({ path }) {
    return (
        <Switch>
            <Route exact path={`${path}/login`} ><Login /></Route>
            <Route exact path={`${path}/register`} ><div><Register /></div></Route>
            <Route exact path={`${path}/change-password`} ><div>change password</div></Route>
        </Switch>
    )
}

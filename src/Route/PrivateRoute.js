import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogin } from '../utils';

function PrivateRoute({ component: Component, ...rest }) {
    const auth = useSelector(state => state.auth)

    return (
        <Route {...rest} render={props => (
            auth.user !== null && auth.user.role === "admin" ? <Component {...props} /> : <Redirect to={"/Login"} />
        )}
        />
    );
}

export default PrivateRoute;
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils';

function PublicRoute({component : Component, restricted= false, ...rest}) {
    const auth = useSelector(state => state.auth);

    return (
        <Route {...rest} render={props => (
            auth.user !== null && restricted ? 
                <Redirect to={"/"} /> : <Component {...props} />
        )}
        />
    );
}

export default PublicRoute;
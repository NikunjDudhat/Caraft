import React from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function ClientRoute({ component: component, ...rest }) {
    const auth = useSelector(state => state.auth);
    return (
        <Route {...rest} render={props => (
            auth.user !== null ?
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Redirect to="/login" />
                    <Footer />
                </>
        )} />        
    );
}

export default ClientRoute;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Categ_admin from '../admin_panel/Container/Categ_admin';
import OrderAdmin from '../admin_panel/Container/Order_admin';
import Product_admin from '../admin_panel/Container/Product_admin';
import CartDetails from '../Container/CartDetails/CartDetails';
import Category from '../Container/Category/Category';
import Client from '../Container/Client/Client';
import Contact from '../Container/Contact/Contact';
import Home from '../Container/Home/Home';
import Login from '../Container/Login/Login';
import ProductDetails from '../Container/ProductDetails/ProductDetails';
import Products from '../Container/Products/Products';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function AppRoute(props) {
    return (
        <>
            <Switch>
                <PublicRoute exact path={"/"} component={Home} />
                <PublicRoute exact path={"/Category"} component={Category} />
                <PublicRoute exact path={"/product-details"} component={ProductDetails} />
                <PrivateRoute exact path={"/admin_Category"} component={Categ_admin} />
                <PrivateRoute exact path={"/product_admin"} component={Product_admin} />
                <PublicRoute exact path={"/Products"} component={Products} />
                <PublicRoute exact path={"/Client"} component={Client} />
                <PublicRoute exact path={"/Contact"} component={Contact} />
                <PublicRoute exact path={"/Login"} restricted={true} component={Login} />
                <PublicRoute exact path={"/CartDetails"} component={CartDetails} />
                <PrivateRoute exact path={"/OrderDetails"} component={OrderAdmin} />
            </Switch>
        </>
    );
}

export default AppRoute;
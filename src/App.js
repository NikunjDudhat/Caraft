// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Category from './Container/Category/Category';
import Products from './Container/Products/Products';
import Client from './Container/Client/Client';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import AddProduct from './Container/AddProduct/AddProduct';

function App() {
  return (
    <>
      <Header/>
      {/* <Home/> */}
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/Category"} component={Category} />
          <Route exact path={"/Products"} component={Products} />
          <Route exact path={"/Client"} component={Client} />
          <Route exact path={"/Contact"} component={Contact} />
          <Route exact path={"/AddProduct"} component={AddProduct} />
          <Route exact path={"/Login"} component={Login} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;

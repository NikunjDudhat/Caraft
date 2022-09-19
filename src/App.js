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
import ListProduct from './Container/AddProduct/ListProduct';
import Categ_admin from './admin_panel/Container/Categ_admin';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { countorStore } from './Redux/Store';
import Product_admin from './admin_panel/Container/Product_admin';
import ProductDetails from './Container/ProductDetails/ProductDetails';

function App() {

  const {store, persistor} = countorStore();


  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Header/>
      {/* <Home/> */}
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/Category"} component={Category} />
          <Route exact path={"/product-details"} component={ProductDetails} />
          {/* <Route exact path={"/admin_Category"} component={Cate_admin} /> */}
          <Route exact path={"/admin_Category"} component={Categ_admin} />
          <Route exact path={"/product_admin"} component={Product_admin} />
          <Route exact path={"/Products"} component={Products} />
          <Route exact path={"/Client"} component={Client} />
          <Route exact path={"/Contact"} component={Contact} />
          <Route exact path={"/AddProduct"} component={AddProduct} />
          <Route exact path={"/ListProduct"} component={ListProduct} />
          <Route exact path={"/Login"} component={Login} />
        </Switch>
      <Footer/>
      </PersistGate>
      </Provider>
    </>
  );
}

export default App;

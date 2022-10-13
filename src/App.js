// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Category from './Container/Category/Category';
import Products from './Container/Products/Products';
import Client from './Container/Client/Client';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import Categ_admin from './admin_panel/Container/Categ_admin';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { countorStore } from './Redux/Store';
import Product_admin from './admin_panel/Container/Product_admin';
import ProductDetails from './Container/ProductDetails/ProductDetails';
import CartDetails from './Container/CartDetails/CartDetails';
import OrderAdmin from './admin_panel/Container/Order_admin';
import 'react-toastify/dist/ReactToastify.css';
import ToastContainerCompnent from './Components/ToastContainer/ToastContainerCompnent';


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
          <Route exact path={"/Login"} component={Login} />
          <Route exact path={"/CartDetails"} component={CartDetails} />
          <Route exact path={"/OrderDetails"} component={OrderAdmin} />
        </Switch>
      <Footer/>
      </PersistGate>
      </Provider>
      <ToastContainerCompnent /> 
    </>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from "./Container/Home/Home";

function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route path={"/"} component={Home}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;

// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';

function App() {
  return (
    <>
      <Header/>
      {/* <Home/> */}
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
      <Footer/>
    </>
  );
}

export default App;

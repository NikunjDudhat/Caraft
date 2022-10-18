// import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Redux/Store';
import 'react-toastify/dist/ReactToastify.css';
import ToastContainerCompnent from './Components/ToastContainer/ToastContainerCompnent';
import { SnackbarProvider } from 'notistack';
import AppRoute from './Route/AppRoute';


function App() {

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            {/* <Home/> */}
            <AppRoute />
            <Footer />
          </PersistGate>
        </Provider>
        <ToastContainerCompnent />
      </SnackbarProvider>
    </>
  );
}

export default App;

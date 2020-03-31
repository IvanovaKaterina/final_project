import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '../../redux/store/configureStore';
import MainLayout from '../MainLayout';
import Header from '../Header';
import Logo from '../Logo';
import Body from '../Body';
import Masters from '../Masters';
import Services from '../Services';
import ServiceRegistry from '../ServiceRegistry';
import ProfileNav from '../ProfileNav';

const App = () => (  
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Logo />
        <Route exact path="/" component={Body} />
        <Route exact path="/" component={Masters} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/registry" component={ServiceRegistry} />
        <Route path="/profile" component={ProfileNav} />
      </MainLayout>   
    </BrowserRouter>
  </Provider>
)


export default App;

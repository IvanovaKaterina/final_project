import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import {store} from './store/configureStore';
import {Provider} from 'react-redux';
import './myStyles.css';
import MainLayout from './Components/main-layout';
import Header from './Components/header';
import Logo from './Components/logo';
import Body from './Components/body';
import Masters from './Components/masters';
import Services from './Components/services';
import ServiceRegistry from './Containers/service-registry';
import ProfileNav from './Components/profile-navigation';

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <MainLayout>
        <Header />
        <Logo />
        <Route exact path="/" component={Body} />
        <Route exact path="/" component={Masters} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/services/registry" component={ServiceRegistry} />
        <Route path="/profile" component={ProfileNav} />
      </MainLayout>   
    </Router>
  </Provider>
), document.getElementById('root'));


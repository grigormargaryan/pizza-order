import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import App from './components/AppComponent/App';
import Order from './components/OrderComponent/Order';
import MyOrders from './components/OrderComponent/MyOrders';
import Header from './components/Header/Header';

import store from './store';
import history from './history';

import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Header/>
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/order/:id' component={Order}/>
        <Route exact path='/my-orders' component={MyOrders}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));


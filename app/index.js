import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import DashboardLayout from './containers/dashboard_layout';
import Login from './components/login_form';
import Registration from './components/registration_form';
import store from './store';
import './style.less'


const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

render(
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/dashboard" component={ DashboardLayout } />
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/register" component={ Registration }/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

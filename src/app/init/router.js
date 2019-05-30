
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../views/login';
// import NotFound from '../../views/outlets';
// import Outlets from '../../views/outlets';
// import BasicLayout from '../../layouts/BasicLayout';
// import { render } from 'node-sass';


const Router = ({ history, user }) => (
  <HashRouter >
    <Switch>
      <Route
          key="/"
          path="/"
          exact={true}
          render = {()=>{
            return (
              <Redirect to="/login" />
            )
          }}
        />
        <Route
          key="/login"
          path="/login"
          exact={true}
          render = {()=>{
            return (
              <div>999
                <Login />
              </div>
            )
          }}
        />
      </Switch>
  </HashRouter>
);

export default Router;




import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Login from '../../views/login';
// import NotFound from '../../views/outlets';
// import Outlets from '../../views/outlets';
// import BasicLayout from '../../layouts/BasicLayout';
// import { render } from 'node-sass';



const propTypes = {
  // history: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
};
const Router = ({ history, user }) => (
  <HashRouter >
    <Switch>
      <Route
          key="/"
          exact={true}
          // redirect="/outlets"
          redirect="/login"
        />
        <Route
          key="/login"
          exact={true}
          // render={props => (
          //   <Login />
          //   <div> 999<div/>
          // )}
          // render={props => (<div> 999<div/>)}
          // render={props => (<div> 999<div/>)}
          render = {()=>{
            return (
              <div>999</div>
            )
          }}
        />
        {/* <Route
          key="/outlets"
          exact={true}
          render={props => (
            <BasicLayout {...props}>
              <Outlets {...props} />
            </BasicLayout>
          )}
        /> */}
        {/* <Route
        render={props => (
          <NotFound {...props} />
        )}
      /> */}
      </Switch>
  </HashRouter>
);

const mapStateToProps = state => ({
  // user: state.app.user,
});

Router.propTypes = propTypes;
export default connect(mapStateToProps)(Router);

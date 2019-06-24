import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'src-intl-context';
import { connect } from 'react-redux';
import createAsyncAction from './createAsyncAction';
import api from './api';
import urls from './urls';


export default function connectWills(name, actions, options = {}) {
  return function connectHoc(WrappedComponent) {
    class ConnectComponenct extends Component {
      constructor(props){
        super(props);
      }
      render() {
        return (
          <WrappedComponent {...this.props} />
        )
      }
    }

const mapStateToProps = state => ({
  [name]: state[name]
});

const commonActionCreator = {
  get:(urlName, params, options={}) => {
    console.log(options);
    return createAsyncAction(urlName, () => {
      return api.get(urls[urlName], params)
    },options)
  },
  post:(urlName, params, options={}) => {
    console.log(options);
    return createAsyncAction(urlName, () => {
      return api.post(urls[urlName], params)
    },options)
  },
  delete:(urlName, params, options={}) => {
    return createAsyncAction(urlName, () => {
      return api.delete(urls[urlName], params)
    },options)
  },
}

const mapDispatchToProps = (dispatch)=>({
  appAction: bindActionCreators({...commonActionCreator, ...actions}, dispatch),
})

let ResultComponent = ConnectComponenct;
const {isInjectIntl, iswithRouter} = options;
  if(isInjectIntl && iswithRouter){
    ResultComponent = withRouter(injectIntl(ConnectComponenct));
  }
  if(isInjectIntl && !iswithRouter){
    ResultComponent = injectIntl(ConnectComponenct);
  }
  if(!isInjectIntl && iswithRouter){
    ResultComponent = withRouter(ConnectComponenct);
  }
    return connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
  }
}



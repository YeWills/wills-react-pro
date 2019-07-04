import React, { Component } from 'react';
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
      render() {
        return (
          <WrappedComponent {...this.props} />
        );
      }
    }

    const mapStateToProps = state => ({
      [name]: (state && state[name]) || {},
    });

    const commonActionCreator = {
      get: (urlName, params) => {
        return createAsyncAction(urlName, () => api.get(urls[urlName], params), options);
      },
      post: (urlName, params) => {
        return createAsyncAction(urlName, () => api.post(urls[urlName], params), options);
      },
      delete: (urlName, params) => createAsyncAction(urlName, () => api.delete(urls[urlName], params), options),
    };

    const mapDispatchToProps = dispatch => ({
      appAction: bindActionCreators({ ...commonActionCreator, ...actions }, dispatch),
    });

    let ResultComponent = ConnectComponenct;
    const { isInjectIntl, iswithRouter } = options;
    if (isInjectIntl && iswithRouter) {
      ResultComponent = withRouter(injectIntl(ConnectComponenct));
    }
    if (isInjectIntl && !iswithRouter) {
      ResultComponent = injectIntl(ConnectComponenct);
    }
    if (!isInjectIntl && iswithRouter) {
      ResultComponent = withRouter(ConnectComponenct);
    }

    const FinalComponent = connect(mapStateToProps, mapDispatchToProps)(ResultComponent);
    FinalComponent.WrappedComponent = WrappedComponent;
    return FinalComponent;
  };
}

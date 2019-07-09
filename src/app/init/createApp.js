import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import Router from './Router';
import storeAndHistory from './createStore';

const { store, history } = storeAndHistory;

const createApp = () => {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
};

export default hot(module)(createApp);

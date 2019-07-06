import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import createBrowserHistory from 'history/createBrowserHistory';
import Router from './Router';
import createStore from './createStore';


const { store, history } = createStore(createBrowserHistory(), {});

const createApp = () => {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
};


export default (createApp);
// export default hot(module)(createApp);

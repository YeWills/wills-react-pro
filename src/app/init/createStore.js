import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

function createAppStore(preloadedState = {}) {
  const history = createBrowserHistory();
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [
    routerMiddleware(history),
    reduxThunk,
  ];

  const store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return {
    store,
    history,
  };
}

export default createAppStore();

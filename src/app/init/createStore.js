import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
//connectRouter, routerMiddleware的用法，请参考：https://github.com/supasate/connected-react-router
//里面介绍了step1\step2...
//connected-react-router用这个的主要原因在于 这个路由很好的兼容了redux 的 reducer，
//所以用到redux的时候，可以用这个路由connected-react-router
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

//此文件主要做了，整合reducer,创建store,给初始值，
//只是要结合用到ConnectedRouter--(webpack v4 在用到redux,只能用ConnectedRouter,不能用传统Router)，
// 和使用createBrowserHistory--(避免url的#)，
// 所以用了插件的一些固定写法显得有点复杂

/*下面的写法是针对connected-react-router 对于 connectRouter ConnectedRouter的用法，
 *是固定用法，具体请参考,不用过多思考:
 * https://www.npmjs.com/package/connected-react-router
  * */

function createAppStore(history, preloadedState = {}) {
  // enhancers
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  // middlewares
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

export default createAppStore;

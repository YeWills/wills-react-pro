import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import Router from './router';
import 'antd/dist/antd.css';



ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
    );
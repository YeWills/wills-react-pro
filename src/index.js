import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './app/init/createApp';



ReactDOM.render(<App />, window.document.getElementById('app'));

// if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    })
//  }
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'antd/dist/antd.css';
import { createStore, createApp, initClient } from './app';

// src\index.js-1
// src\app\index.js-2
// index.js-1(ReactDOM.render)--index.js-2--createApp.js--router.js（这里包含所有的页面 action）
//                                        --createStore.js（整合reducer,创建store,给初始值）--reducer

//这里只当做createStore是 创建 整合过reducer，reducer初始值，集成history的函数，
   // 接受两个参数：history，reducer初始值；
//并且返回 store 和 history
//因此有关reducer的定义与处理，就放在createStore对应的文件中：src\app\init\createStore.js

//给Router定义history属性 的做法与 深入浅出react与redux 书本示例I:\react-redux-place\chapter-11\react_router_basic相似，
//深入浅出书籍 220页
//其实就是想在调试时，redux devTools工具看到动态切换的效果：
// 这里history单独拎出来，并且使用connected-react-router主要原因是为了 让路由与redux同步，可以调试redux-devtools工具
// 如果想用redux-tool调试工具，完全可以使用其他的react-router-dom 的BrowserRouter代替ConnectedRouter

const { store, history } = createStore(createBrowserHistory(), {});
const application = createApp(store, history);

//这里用来做cookie缓存，验证是否登陆的
initClient(store.dispatch);

ReactDOM.render(application, window.document.getElementById('app'));

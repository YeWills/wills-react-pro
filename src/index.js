import ReactDOM from 'react-dom';
import {store} from './redux/store';
import 'antd/dist/antd.css';
import { createApp } from './app';


const App = createApp(store)

ReactDOM.render(App, document.getElementById('root'));